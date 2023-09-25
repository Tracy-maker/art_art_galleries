import { createClient } from "next-sanity";

projectId: 'w3gmnen9',
dataset: 'production',
const apiVersion = "2023-10-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
