import { client } from "@/app/lib/sanity";
import { gallery } from "../../lib/interface";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as gallery;
  
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-1 text-center">
            <div className="space-y-10">
              <div>
                <p className="text-base font-medium leading-6 text-blue-500">
                  {new Date(data._createdAt).toISOString().split("T")[0]}
                </p>
              </div>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}
