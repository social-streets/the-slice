export interface PublicationDetails {
  name: string;
  parentOrganization: string;
  description: string;
  yearFounded: number;
  url: string;
  supportLink: string;
  logoUrl: string;
  emblemUrl: string;
  faviconUrl: string;
  sections: Section[];
  navigation: NavSection[];
}

export interface Section {
  label: string;
  slug: string;
}

export interface NavSection {
  label: string;
  url: string;
  subNav?: NavLink[];
}

interface NavLink {
  label: string;
  url: string;
}

export interface RawArticleMetadata extends ArticleMetadata {
  authorIds?: string[];
}

export interface HydratedArticleMetadata extends ArticleMetadata {
  authors?: Author[];
}

export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  publicationDate: string;
  tags: string[];
  section: string;
  featuredImage?: string;
  featuredImageAltText?: string;
  featuredImageCaption?: string;
}

export interface Article extends HydratedArticleMetadata {
  content: string;
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
}

export interface Ad {
  name: string;
  img: string;
  url: string;
}
