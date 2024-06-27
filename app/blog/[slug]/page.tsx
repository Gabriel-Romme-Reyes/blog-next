import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == "${slug}"]
{
  title,
    content,
    titleImage,
    "currentSlug": slug.current
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div>
      <h1 className="block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl mb-8">
        {data.title}
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt="img"
        width={800}
        height={800}
        className="rounded-lg"
      ></Image>

      <div className="mt-16 prose prose-xl dark:prose-invert">
        <PortableText value={data.content}></PortableText>
      </div>
    </div>
  );
}
