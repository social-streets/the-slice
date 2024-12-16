// Temporary as a proof of concept before moving out of the template

import type { Author, PublicationDetails } from "@gonzo-engineering/libs";

export const PUBLICATION_DETAILS: PublicationDetails = {
  name: "The Slice",
  parentOrganization: "Social Streets",
  description: "A publication about everything",
  yearFounded: 2017,
  url: "https://theslicemagazine.co.uk/",
  supportLink: "https://example.com/support",
  logoUrl: "https://public.flourish.studio/uploads/986761/9625e861-9a3a-4e45-b0fd-b42d4780b7cd.png",
  emblemUrl:
    "https://pbs.twimg.com/profile_images/1843210835776114688/Zz8-j1Pj_400x400.jpg",
  faviconUrl:
    "https://pbs.twimg.com/profile_images/1843210835776114688/Zz8-j1Pj_400x400.jpg",
  sections: [
    { label: "Bethnal Green", slug: "bethnal-green" },
    { label: "Poplar", slug: "poplar" },
    { label: "Roman Road", slug: "roman-road" },
    { label: "Whitechapel", slug: "whitechapel" },
  ],
  navigation: [
    { label: "Bethnal Green", url: "/bethnal-green" },
    { label: "Poplar", url: "/poplar" },
    { label: "Roman Road", url: "/roman-road" },
    { label: "Whitechapel", url: "/whitechapel" },
  ],
};

export const AUTHORS: Author[] = [
  {
    id: "j-w-marceau",
    name: "J. W. Marceau",
    bio: "J. W. Marceau means well.",
  },
  {
    id: "tintin",
    name: "Tintin",
    bio: "Tintin is a reporter and adventurer.",
  },
];
