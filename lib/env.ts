export function isProd(): boolean {
  return process.env.NEXT_PUBLIC_ENV == "prod";
}

export function isStaging(): boolean {
  return process.env.NEXT_PUBLIC_ENV == "staging";
}

export function getURL(): string {
  if (isProd()) {
    return "https://uwclubs.com";
  } else if (isStaging()) {
    return "https://staging.uwclubs.com";
  } else {
    return "http://localhost:3000";
  }
}
