import { defineQuery } from "next-sanity";

export const allPostsQuery = defineQuery(`
    *[_type == "post" && defined(slug.current)]
    {
      _id, title, slug
    }`);

export const singlePostQuery = defineQuery(`
    *[_type == "post" && slug.current == $slug][0]
    {
      title, body, mainImage
    }`);
