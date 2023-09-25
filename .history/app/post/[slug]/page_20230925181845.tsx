import { client } from "@/app/lib/sanity";
import { gallery } from "../../lib/interface";

async function getData(slug: string) {
  const query = `*[_type =="post"&&slug.current=="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as gallery;
  return(
    <div></div>
  )
}
