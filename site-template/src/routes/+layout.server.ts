import type { Ad, PublicationDetails } from "$lib/types";

export async function load({ fetch }) {
  // Publication details
  const publicationResponse = await fetch("/api/publication-details");
  const publication: PublicationDetails = await publicationResponse.json();
  // Ads
  const adsResponse = await fetch("/api/ads");
  const ads: { banner: Ad; sideA: Ad; sideB: Ad } = await adsResponse.json();
  return { ads, publication };
}
