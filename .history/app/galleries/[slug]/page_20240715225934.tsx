import { client } from "@/app/lib/sanity";
import { gallery } from "../../lib/interface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";

async function getData(slug: string) {
  const query = `*[_type == "gallery" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as gallery;
  console.log(data);

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <div className="flex justify-center items-center my-4">
          <Image
            src={urlFor(value).url()}
            alt="Gallery Image"
            className="rounded-lg"
            width={800}
            height={800}
            objectFit="cover"
          />
        </div>
      ),
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <header className="pt-6 pb-6 text-center">
        <div className="space-y-1">
          <p className="text-base font-medium leading-6 text-blue-500">
            {new Date(data._createdAt).toISOString().split("T")[0]}
          </p>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {data.title}
          </h1>
        </div>
      </header>

      <main className="divide-y divide-gray-200 dark:divide-gray-700">
        <article className="prose max-w-none py-10 dark:prose-invert prose-lg">
          <PortableText
            value={data.content}
            components={PortableTextComponent}
          />
        </article>
      </main>
    </div>
  );
}
