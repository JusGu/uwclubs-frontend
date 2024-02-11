export function isProd(): boolean {
  return process.env.NEXT_PUBLIC_ENV == "prod";
}

export function isStaging(): boolean {
  return process.env.NEXT_PUBLIC_ENV == "staging";
}
