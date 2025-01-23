import { defineQuery } from "next-sanity";

export const allPostsQuery = defineQuery(`
    *[_type == "post" && defined(slug.current)]
    {
      _id, title, slug, body, mainImage, publishedAt, "categories": coalesce(
        categories[]->{
          _id,
          slug,
          title
        },
        author->{
          name, image
        }
      )
    }`);

export const postSlugQuery = defineQuery(
  `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
  }`
);
export const singlePostQuery = defineQuery(`
    *[_type == "post" && slug.current == $slug][0]
    {
      title, body, mainImage, publishedAt,
      "categories": coalesce(
        categories[]->{
          _id,
          slug,
          title
        },[]
      ),
      author->{
        name, image
      }
    }`);
