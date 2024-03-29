import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

import { dataset, projectId } from "@/sanity/env";
import PageWrapper from "../shared/PageWrapper";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Calistoga } from "next/font/google";
import { renderDiscordHoverable } from "@/sanity/schemas/renderDiscordHoverable";
import { formatDateDescription } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { notFound } from 'next/navigation'

const builder = imageUrlBuilder({ projectId, dataset });
const calistoga = Calistoga({ weight: "400", subsets: ["latin"] });

export default function Post({ post }: { post: SanityDocument }) {
  if (!post) {
    notFound()
  }

  const { title, author, excerpt, mainImage, publishedAt, body } = post;

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
        <div className="flex gap-2 items-center text-base">
          <Link href="/" className="no-underline">Home</Link>
          <ChevronRight size={20} className="inline-block" />
          <Link href="/blog" className="no-underline">Blog</Link>
          <ChevronRight size={20} className="inline-block" />
          <Link href={`/blog/${post.slug.current}`} className="no-underline">{title}</Link>
        </div>
        <div className="my-4">
          <div className="flex flex-col gap-4 mt-6 mb-6">
            {title ? (
              <h1 className={`text-5xl font-bold ${calistoga.className} m-0`}>
                {title}
              </h1>
            ) : null}
            {excerpt && <p className="m-0 opacity-80">{excerpt}</p>}
          </div>

          <div className="flex items-center gap-4 mb-6">
            {author?.image && (
                <Image
                  src={builder.image(author.image).width(108).height(108).quality(100).url()}
                  className="rounded-full m-0"
                  height={48}
                  width={48}
                  alt={author.image?.alt ?? author.name}
                />
            )}
            <div className="flex flex-col m-0">
              <p className="m-0 text-base">
                {author?.name}
                <span className="mx-2 text-xl"> • </span>
                {formatDateDescription(publishedAt, "MMM dd, yyyy")}
              </p>
              {author?.socialMediaUrl && (
                <a
                  href={author.socialMediaUrl}
                  target="_blank"
                  className="m-0 text-base opacity-50 hover:opacity-100"
                >
                  {author.socialMediaUrl.replace(/^https?:\/\//, "")}
                </a>
              )}
            </div>
          </div>
          <Separator className="mb-14"/>

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

          {body ? (
            <PortableText value={body} components={myPortableTextComponents} />
          ) : null}
        </div>
      </main>
    </PageWrapper>
  );
}
