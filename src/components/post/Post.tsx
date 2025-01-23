import { SinglePostQueryResult } from "@/sanity/types";
import Categories from "../categories/Categories";
import PublishedAt from "../published-at/PublishedAt";
import Title from "../title/Title";
import Author from "../author/Author";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import components from "@/sanity/portableTextComponents";

const Post = (props: NonNullable<SinglePostQueryResult>) => {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="grid lg:grid-cols-12 gap-y-12">
      <header className="lg:col-span-12 flex flex-col gap-4 items-start">
        <div className="flex gap-4 items-center">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="lg:col-span-4 flex flex-col gap-2 items-start">
          <Image
            src={urlFor(mainImage).width(400).height(400).url()}
            width={400}
            height={400}
            alt={mainImage?.alt || ""}
          />
        </figure>
      ) : null}
      {body ? (
        <div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
};

export default Post;
