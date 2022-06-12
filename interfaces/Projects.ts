export interface IProjects {
  title: string;
  slug: string;
  description: string;
  github_url: string;
  page_url: string;
  image: ImageProjects;
}

export interface ImageProjects {
  data: ImageProjectsData;
}

export interface ImageProjectsData {
  attributes: DataProjectsAttributes;
}

export interface DataProjectsAttributes {
  url: string;
  width: number;
  height: number;
}
