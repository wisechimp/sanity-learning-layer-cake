import { AllPostsQueryResult } from "@/sanity/types";
import Link from "next/link";
import Categories from "../categories/Categories";
import Author from "../author/Author";
import PublishedAt from "../published-at/PublishedAt";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const PostCard = (props: AllPostsQueryResult[0]) => {
  const { title, author, mainImage, publishedAt, categories, slug } = props;

  return (
    <Link className="group" href={`/posts/${slug!.current}`}>
      <article className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12 md:gap-0">
        <div className="md:col-span-2 md:pt-1">
          <Categories categories={categories} />
        </div>
        <div className="md:col-span-5 md:w-full">
          <h2 className="text-2xl text-pretty font-semibold text-slate-800 group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75">
            <span className="relative z-[1]">{title}</span>
            <span className="bg-pink-50 z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
          </h2>
          <div className="flex items-center mt-2 md:mt-6 gap-x-6">
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
        <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(400).height(400).url()}
              width={400}
              height={400}
              alt={mainImage?.alt || title || ""}
            />
          ) : null}
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
