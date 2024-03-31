import EditableEventCard from "@/components/events/EventCard/EditableEventCard";
import EventCardNav from "@/components/events/EventCard/EventCardNav";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: { form: string, secret: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const forms = await supabase
    .from("forms")
    .select("item_id")
    .match({ id: parseInt(searchParams.form), secret: searchParams.secret })
    .is("deleted_at", null);
  
  // TODO: only get forms updated at in past 5 mins

  if (!forms?.data?.length) {
    notFound();
  }

  const events = await supabase
    .from("events")
    .select(
      `
      id,
      title,
      start_time,
      end_time,
      location,
      description,
      guild_id,
      channel_id,
      message_id,
      guilds ( short_name, description )
      `
    )
    .eq("id", forms.data[0].item_id)
    .is("deleted_at", null);
  
  if (!events?.data?.length) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className="w-full sm:w-1/2 p-3 sm:p-6 mx-auto sm:max-w-2xl">
        <EventCardNav />
        <EditableEventCard event={events.data[0]} />
      </div>
    </div>
  );
}
