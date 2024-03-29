import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

import { dataset, projectId } from "@/sanity/env";
import PageWrapper from "./shared/PageWrapper";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Calistoga } from "next/font/google";
import { redirect } from "next/navigation";
import { renderDiscordHoverable } from "@/sanity/schemas/renderDiscordHoverable";
import { formatDateDescription } from "@/lib/utils";

const builder = imageUrlBuilder({ projectId, dataset });
const calistoga = Calistoga({ weight: "400", subsets: ["latin"] });

export default function Post({ post }: { post: SanityDocument }) {
  if (!post) {
    redirect("/blog");
  }

  const { title, author, exert, mainImage, publishedAt, body } = post;

  const myPortableTextComponents = {
    types: {
      image: ({
        value,
      }: {
        value: { alt?: string; asset: { _ref: string } };
      }) => {
        return (
          <Image
            alt={value.alt || ""}
            src={builder.image(value.asset._ref).url()}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-3xl"
          />
        );
      },
    },
    marks: {
      discordHoverable: (props: any) => renderDiscordHoverable(props),
    },
  };

  return (
    <PageWrapper>
      <main className="container mx-auto prose prose-lg p-4">
        <div className="flex gap-2 items-center">
          <Link href="/">Home</Link>
          <ChevronRight size={20} className="inline-block" />
          <Link href="/blog">Blog</Link>
          <ChevronRight size={20} className="inline-block" />
          <Link href={`/blog/${post.slug.current}`}>{title}</Link>
        </div>
        <div className="my-4">
          {title ? (
            <h1 className={`text-5xl font-bold ${calistoga.className}`}>
              {title}
            </h1>
          ) : null}
          <p>
            {formatDateDescription(publishedAt, "MMM dd, yyyy")}
          </p>
          {mainImage && (
            <Image
              alt={mainImage.alt || ""}
              src={builder.image(mainImage).url()}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-3xl"
            />
          )}
          {exert && <b>{exert}</b>}

          {body ? (
            <PortableText value={body} components={myPortableTextComponents} />
          ) : null}
        </div>
      </main>
    </PageWrapper>
  );
}
