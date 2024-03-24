import { isProd } from "./env";

const getAPIURL = (protocol: string = "https"): string => {
  if (isProd()) {
    return `${protocol}://api.uwclubs.com`;
  } else {
    return `${protocol}://dev.api.uwclubs.com`;
  }
};

export const getCalendarURL = (guildId: string): string => {
  return `${getAPIURL()}/calendar/?guild_id=${guildId}`;
};

export const getEventURL = (eventId: string): string => {
  return `${getAPIURL()}/calendar/?event_id=${eventId}`;
};

export const getWebCalendarURL = (guildId: string): string => {
  return `${getAPIURL("webcal")}/calendar/?guild_id=${guildId}`;
};
