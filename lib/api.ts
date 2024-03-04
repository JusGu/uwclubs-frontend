import { isProd } from "./env";

function getAPIURL(protocol: string = "https"): string {
  if (isProd()) {
    return `${protocol}://api.uwclubs.com`;
  } else {
    return `${protocol}://dev.api.uwclubs.com`;
  }
}

export function getCalendarURL(guildId: string): string {
  return `${getAPIURL()}/calendar/?guild_id=${guildId}`;
}

export function getEventURL(eventId: string): string {
  return `${getAPIURL()}/calendar/?event_id=${eventId}`;
}

export function getWebCalendarURL(guildId: string): string {
  return `${getAPIURL("webcal")}/calendar/?guild_id=${guildId}`;
}
