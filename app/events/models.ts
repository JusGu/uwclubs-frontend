export interface event {
    id: string;
    title: string;
    start_time: string;
    end_time: string;
    description: string;
    location: string;
    guild_id: string;
    guilds: Guild;
}

interface Guild {
    short_name: string;
}

export interface PostgresChangePayload {
    schema: string;
    table: string;
    commit_timestamp: string;
    eventType: string;
    new: event;
    old: event;
    errors?: string;
}