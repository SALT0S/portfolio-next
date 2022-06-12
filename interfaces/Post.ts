export interface IPost {
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
