import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card } from "@/components/ui/card";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "blog"]  | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 mt-5 gap-5">
      <Image
        src="/image/minimalist-hero.jpg"
        alt="hero"
        width={800}
        height={800}
        className="rounded-lg mb-8 hover:shadow-xl dark:shadow-white"
      ></Image>
      <h1 className="font-bold text-lg text-gray-500 ">Recent Publications</h1>
      {data.map((post, idx) => (
        <Link
          href={`/blog/${post.currentSlug}`}
          className="hover:shadow-lg dark:shadow-white rounded-lg"
          key={idx}
        >
          <Card className="grid grid-cols-3 gap-2">
            <div className="p-5 col-span-3 md:col-span-2">
              {" "}
              <h1 className="text-xl font-bold">{post.title}</h1>
            </div>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="img"
              width={500}
              height={500}
              className="rounded-lg object-fill h-[150px] hidden md:block"
            ></Image>
          </Card>
        </Link>
      ))}
    </div>
  );
}
