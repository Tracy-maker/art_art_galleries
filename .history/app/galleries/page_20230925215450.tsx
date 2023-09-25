import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { client } from "../lib/sanity";
import Image from "next/image";
import { gallery } from "../lib/interface";

async function getData() {
  const query = `*[_type == "gallery"] {
    title,
    overview,
    _id,
    "imageUrl": image.asset->url, 
    slug,
    _createdAt
  }`;
  
  const data = await client.fetch(query);
  return data;
  console.log(data);
}

export default async function galleries() {
  const data = (await getData()) as gallery[];
  console.log(data);
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="flex font-custom leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-lg sm:leading-10 md:text-xl md:leading-13">
          Greetings to my art sanctuary! Should any piece stir your soul, a
          simple email will bridge our worlds. Let our artistic dialogue begin.
          <Link href="mailto:ydlvns@gmail.com" target="_email">
            <EnvelopeIcon className="w-12 h-12 text-blue-500" />
          </Link>
        </div>
      </div>
      <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((gallery) => (
          <article
            key={gallery._id}
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-blue-100"
          >
            <div className="h-56 w-full relative">
              <Image
                fill
                src={gallery.imageUrl}
                alt="Image of Project"
                className="w-full h-full object-cover"
              />
            </div>
            <Link href={`/galleries/${gallery.slug.current}`} prefetch>
              <div className="p-4 sm:p-6">
                <div>
                  <p className="text-base font-medium leading-6 text-blue-900">
                    {new Date(gallery._createdAt).toISOString().split("T")[0]}
                  </p>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {gallery.title}
                  </h3>
                </div>
                <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {gallery.overview}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
