import { SanityDocument } from "next-sanity";
import Link from "next/link";
import PageWrapper from "./shared/PageWrapper";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <PageWrapper>
      <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
            </Link>
          ))
        ) : (
          <div className="p-4 text-red-500">No posts found</div>
        )}
      </main>
    </PageWrapper>
  );
}
