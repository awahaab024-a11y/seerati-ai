-- Atomic per-key rate limiting for the AI Edge Function. Only service_role may call it.
create table if not exists public.rate_limits (
  key text primary key,
  n int not null default 0,
  expires_at timestamptz not null
);
alter table public.rate_limits enable row level security; -- no policies: anon/authenticated cannot read or write

create or replace function public.rate_hit(p_key text, p_max int, p_ttl int)
returns boolean language plpgsql security definer set search_path = public as $$
declare v int;
begin
  if random() < 0.02 then delete from public.rate_limits where expires_at < now(); end if;
  insert into public.rate_limits(key, n, expires_at) values (p_key, 1, now() + make_interval(secs => p_ttl))
  on conflict (key) do update set
    n = case when public.rate_limits.expires_at < now() then 1 else public.rate_limits.n + 1 end,
    expires_at = case when public.rate_limits.expires_at < now() then now() + make_interval(secs => p_ttl) else public.rate_limits.expires_at end
  returning n into v;
  return v > p_max;  -- true = limited
end $$;

revoke all on function public.rate_hit(text, int, int) from public, anon, authenticated;
grant execute on function public.rate_hit(text, int, int) to service_role;
