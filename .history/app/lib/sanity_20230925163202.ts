import { createClient } from "next-sanity";

const projectId = 'w3gmnen9';
const dataset = "production";
const apiVersion = "2023-12-31";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
