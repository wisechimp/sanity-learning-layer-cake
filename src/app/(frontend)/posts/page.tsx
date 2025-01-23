import PostCard from "@/components/post-card/PostCard";
import Title from "@/components/title/Title";
import { sanityFetch } from "@/sanity/lib/live";
import { allPostsQuery } from "@/sanity/lib/queries";

const PostsPage = async () => {
  const { data: posts } = await sanityFetch({ query: allPostsQuery });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Post Index</Title>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
};

export default PostsPage;
