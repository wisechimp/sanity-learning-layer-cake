import Title from "@/components/title/Title";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto grid grid-cols-l gap-6 p-12">
      <Title>Layer Caker Home Page</Title>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </main>
  );
}
