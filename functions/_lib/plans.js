// Monetization-ready plan layer. v1: everyone is "free". To add Pro later, return "pro" from planFor()
// after verifying a signed token / session (never trust a client-supplied plan name).
export const PLANS={free:{perMin:5,perDay:40},pro:{perMin:15,perDay:400},enterprise:{perMin:60,perDay:5000}};
export async function planFor(request,env){return "free"}
export function limitsFor(env,plan){const p=PLANS[plan]||PLANS.free;return{perMin:+env.RATE_PER_MIN||p.perMin,perDay:+env.RATE_PER_DAY||p.perDay}}
