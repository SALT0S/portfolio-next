export interface IPost {
  data: Datum[];
}

export interface Datum {
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  title: string;
  slug: string;
  date: string;
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
