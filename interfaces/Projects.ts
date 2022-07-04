export interface IProjects {
  attributes: ProjectsData;
}

export interface ProjectsData {
  title: string;
  slug: string;
  seo_title: string;
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
