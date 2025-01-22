import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto grid grid-cols-l gap-6 p-12">
      <h1 className="text-4xl font-bold">Home</h1>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </main>
  );
}
