import Post from "@/components/post/Post";
import { sanityFetch } from "@/sanity/lib/live";
import { singlePostQuery } from "@/sanity/lib/queries";
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
      <Post {...post} />
    </main>
  );
};

export default PostPage;
