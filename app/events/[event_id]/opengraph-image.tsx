import { ImageResponse } from "next/og";
import { ImageResponseOptions } from "next/dist/compiled/@vercel/og/types";
import {
  club_light_gray,
  getImageOptions,
  loadFallbackImage,
  toOpenGraphEventDetails,
  fetchEventData,
  EventDetail,
  LucideClock,
  LucidePin,
  baseStyle,
  leftBarStyle,
  titleStyle,
} from "@/lib/opengraph-utils";

export const runtime = "edge";
export const alt = "Event Details";
export const contentType = "image/png";

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
        <h3
          style={{
            fontSize: 42,
            color: club_light_gray,
            margin: 0,
            marginBottom: "24px",
          }}
        >
          @{eventDetails.club_name}
        </h3>
        <EventDetail
          icon={LucideClock(56)}
          text={eventDetails.date_description}
        />
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
