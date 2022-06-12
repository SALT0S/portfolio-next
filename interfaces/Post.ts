export interface IPost {
  data: DatumPost[];
}

export interface DatumPost {
  attributes: DatumAttributesPost;
}

export interface DatumAttributesPost {
  title: string;
  slug: string;
  date: Date;
  read_min: string;
  content: string;
  description: string;
  seo_title: string;
  featured: boolean;
  image: ImagePost;
  author: AuthorPost;
}

export interface AuthorPost {
  author_title: string;
  image: ImagePost;
}

export interface ImagePost {
  data: ImageDataPost;
}

export interface ImageDataPost {
  attributes: DataAttributesPost;
}

export interface DataAttributesPost {
  url: string;
}
