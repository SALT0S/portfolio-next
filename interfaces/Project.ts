export interface IProject {
  title: string;
  slug: string;
  description: string;
  github_url: string;
  page_url: string;
  image: ImageProject;
}

export interface ImageProject {
  data: ImageProjectData;
}

export interface ImageProjectData {
  attributes: DataProjectAttributes;
}

export interface DataProjectAttributes {
  url: string;
  width: number;
  height: number;
}
