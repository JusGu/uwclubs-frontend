export interface IWeeklyEvents {
    [date: string]: IEvent[];
}

export interface IEvent {
    id: string;
    title: string;
    start_time: string;
    end_time: string;
    description: string;
    location: string;
    guild_id: string;
    channel_id: string;
    message_id: string;
    guilds: IGuild;
}

interface IGuild {
    short_name: string;
}

export interface IPostgresChangePayload {
    schema: string;
    table: string;
    commit_timestamp: string;
    eventType: string;
    new: IEvent;
    old: IEvent;
    errors?: string;
}

export interface EventListSearchParams {
    start?: string;
    end?: string;
}