import { createClient } from "@/utils/supabase/client";
import { ImageResponse } from "next/og";
import { format } from "date-fns";
import { ImageResponseOptions } from "next/dist/compiled/@vercel/og/types";

export const runtime = "edge";

export const alt = "Event Details";
export const contentType = "image/png";
const club_blue = "#265170";
const club_beige = "#f0ead7";
const club_gray = "#383838";
const club_light_gray = "#6F6D68";
const club_border = "#a9a8a2";

interface OpenGraphEventDetails {
  title: string;
  club_name: string;
  date_description: string;
  location: string;
}

export default async function Image({
  params,
}: {
  params: { event_id: string };
}) {
  const options = await getImageOptions();
  const { data, error } = await fetchEventData(params.event_id);
  const eventDetails = toOpenGraphEventDetails(data);
  if (error || !eventDetails) {
    return await renderFallbackImage(options);
  }

  console.log(eventDetails);

  return new ImageResponse(
    (
      <div
        style={{
          ...baseStyle,
          padding: "20px",
          paddingLeft: "120px",
          paddingRight: "70px",
          position: "relative",
        }}
      >
        <div style={leftBarStyle}></div>
        <h1 style={titleStyle}>{eventDetails.title}</h1>
        <h3 style={{ fontSize: 42, color: club_light_gray, margin: 0, marginBottom: "24px" }}>
          @{eventDetails.club_name}
        </h3>

        <EventDetail icon={LucideClock(56)} text={eventDetails.date_description} />
        <EventDetail icon={LucidePin(56)} text={eventDetails.location} />
      </div>
    ),
    {
      ...options,
    }
  );
}

export async function renderFallbackImage(options: ImageResponseOptions) {
  const fallbackImage = await loadFallbackImage();
  return new ImageResponse(
    (
      <div style={baseStyle}>
        <img
          // @ts-ignore
          src={fallbackImage}
          alt={alt}
          height={options.height}
          width={options.width}
        />
      </div>
    ),
    options
  );
}

async function loadFontBold() {
  const fontData = await fetch(
    new URL("@/assets/fonts/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return fontData;
}

async function loadFont() {
  const fontData = await fetch(
    new URL("@/assets/fonts/Inter-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return fontData;
}

async function loadFallbackImage() {
  const fallbackImage = await fetch(
    new URL("@/app/opengraph-image.png", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return fallbackImage;
}

async function fetchEventData(eventId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("events")
    .select("title, start_time, location, message_id, guilds ( short_name )")
    .eq("message_id", eventId);

  return { data, error };
}

async function getImageOptions(): Promise<ImageResponseOptions> {
  const fontData = await loadFont();
  const fontDataBold = await loadFontBold();
  return {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "InterBold",
        data: fontDataBold,
        style: "normal",
      },
      {
        name: "Inter",
        data: fontData,
        style: "normal",
      },
    ],
  };
}

function toOpenGraphEventDetails(data: any): OpenGraphEventDetails | null {
  if (!data || data.length === 0) return null;
  const event = data[0];
  const dateDescription = format(
    new Date(event.start_time),
    "EEE, MMM d, h:mm a"
  );
  return {
    title: event.title,
    club_name: event.guilds.short_name,
    date_description: dateDescription,
    location: event.location,
  };
}

export const baseStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  backgroundColor: club_beige,
  flexDirection: "column" as const,
  color: club_gray,
  justifyContent: "center",
  fontFamily: "Inter",
};

export const leftBarStyle = {
  width: "50px",
  height: "1000px",
  backgroundColor: club_blue,
  position: "absolute" as const,
  top: 0,
  left: 0,
};

const LucideClock = (size: number) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const LucidePin = (size: number) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const titleStyle = {
  fontSize: 86,
  margin: 0,
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  fontFamily: "InterBold",
} as const;

const EventDetail = ({ icon, text }: { icon: JSX.Element; text: string }) => (
    <div
      style={{
        display: "flex",
        padding: "36px",
        gap: "18px",
        alignItems: "center",
        border: `3px solid ${club_border}`,
        borderRadius: "48px",
        marginTop: "12px",
        marginBottom: "12px",
      }}
    >
      {icon}
      <p style={{ margin: 0, color: club_gray, fontSize: "48px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {text}
      </p>
    </div>
  );
