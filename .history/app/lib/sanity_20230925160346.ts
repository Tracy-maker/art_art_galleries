import { createClient } from "next-sanity";

const projectId = 'w3gmnen9',
const dataset = "production";
const apiVersion = "2023-10-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
