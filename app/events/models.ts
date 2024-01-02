export interface event {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    title: string;
    start_time: string;
    end_time: string;
    description: string;
    location: string;
    link: string | null;
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