// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

const postFields = groq`
  _id,
  title,
  publishedAt,
  excerpt,
  mainImage,
  body,
  "slug": slug.current,
  "author": author->{name, image, socialMediaUrl},
  `;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
