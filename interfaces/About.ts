export interface IAbout {
  description: string;
  content: string;
  author: Author;
}

export interface Author {
  author_title: string;
  image: ImageAbout;
}

export interface ImageAbout {
  data: ImageDataAbout;
}

export interface ImageDataAbout {
  attributes: FluffyAttributesAbout;
}

export interface FluffyAttributesAbout {
  url: string;
  width: number;
  height: number;
}
