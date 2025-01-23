import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { singlePostQuery } from "@/sanity/lib/queries";
import components from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

const PostPage = async ({ params }: PostPageProps) => {
  const { data: post } = await sanityFetch({
    query: singlePostQuery,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {post?.mainImage ? (
        <Image
          className="w-full aspect-[800/300]"
          src={urlFor(post.mainImage)
            .width(800)
            .height(300)
            .quality(80)
            .auto("format")
            .url()}
          alt={post?.mainImage?.alt || ""}
          width="800"
          height="300"
        />
      ) : null}
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      {post?.body ? (
        <div className="prose">
          <PortableText value={post.body} components={components} />
        </div>
      ) : null}
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
};

export default PostPage;
