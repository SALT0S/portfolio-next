export interface IPosts {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: Image;
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  attributes: DataAttributes;
}

export interface DataAttributes {
  url: string;
}
