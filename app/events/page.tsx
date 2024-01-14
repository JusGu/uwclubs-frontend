import EventList from "../../components/events/Eventlist";
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full sm:w-1/2 p-6 mx-auto">
        <h1 className={`text-4xl font-bold mb-4 ${lora.className}`}>Events</h1>
        <EventList />
      </div>
    </div>
  );
}
