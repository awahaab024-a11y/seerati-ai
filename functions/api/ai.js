import {callProvider} from "../_lib/providers.js";
import {buildPrompt} from "../_lib/prompts.js";
import {json,limited,parseJson,verifyTurnstile} from "../_lib/guard.js";
import {planFor,limitsFor} from "../_lib/plans.js";
const MAX=40000;
export async function onRequestPost({request,env}){
  const origin=request.headers.get("Origin");
  if(env.ALLOWED_ORIGIN&&origin!==env.ALLOWED_ORIGIN)return json({code:"forbidden"},403);
  if(!(request.headers.get("Content-Type")||"").includes("application/json"))return json({code:"bad_request"},415);
  const raw=await request.text();
  if(raw.length>MAX)return json({code:"too_large"},413);
  let body;try{body=JSON.parse(raw)}catch{return json({code:"bad_request"},400)}
  if(!body||typeof body!=="object")return json({code:"bad_request"},400);
  const built=buildPrompt(body);
  if(!built)return json({code:"bad_request"},400);
  const ip=request.headers.get("CF-Connecting-IP")||"anon";
  if(!(await verifyTurnstile(env,request.headers.get("X-Turnstile-Token"),ip)))return json({code:"forbidden"},403);
  if(await limited(env,ip,limitsFor(env,await planFor(request,env))))return json({code:"rate_limited"},429);
  try{
    const text=await callProvider(env,built.prompt,built.json);
    return json({result:built.json?parseJson(text):String(text).trim()});
  }catch(e){
    if(e.code==="not_configured")return json({code:"not_configured"},503);
    if(e.code==="rate_limited")return json({code:"rate_limited"},429);
    console.error("ai_error",e.code||"",e.message);
    return json({code:"error"},502);
  }
}
export const onRequest=()=>json({code:"method_not_allowed"},405);
