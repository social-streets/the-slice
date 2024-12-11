import { PUBLICATION_DETAILS } from "$lib/constants";
import { json } from "@sveltejs/kit";

export async function GET() {
  return json(PUBLICATION_DETAILS);
}
