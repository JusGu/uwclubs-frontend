import { SanityDocument } from "next-sanity";
import Link from "next/link";
import PageWrapper from "../shared/PageWrapper";
import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { formatDateDescription } from "@/lib/utils";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({ weight: "400", subsets: ["latin"] });
const builder = imageUrlBuilder({ projectId, dataset });

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <PageWrapper footerLarge={true}>
      <main className="md:max-w-5xl w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-2 mt-16">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <div key={post._id}>
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline"
              >
                <Image
                  src={builder.image(post.mainImage).url()}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-3xl"
                  alt={post.mainImage?.alt}
                />
                <h2 className={`pt-6 text-2xl md:text-4xl font-bold ${calistoga.className}`}>{post.title}</h2>
              </Link>
              <p className="pt-2 text-base">
                {formatDateDescription(post.publishedAt, "MMM dd, yyyy")}
              </p>
            </div>
          ))
        ) : (
          <div className="p-4 text-red-500">No posts found</div>
        )}
      </main>
    </PageWrapper>
  );
}
