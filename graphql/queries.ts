import { gql } from "@apollo/client";

export const GET_ALL_FEATURED_PROJECTS = gql`
  query getProjects {
    projects(filters: { featured: { eq: true } }) {
      data {
        attributes {
          title
          slug
          description
          github_url
          page_url
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query getProjects {
    projects {
      data {
        attributes {
          title
          slug
          seo_title
          description
          github_url
          page_url
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query getProject($slug: String!) {
    projects(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          seo_title
          description
          content
          github_url
          page_url
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_FEATURED_POSTS = gql`
  query getPosts {
    posts(filters: { featured: { eq: true } }) {
      data {
        attributes {
          title
          slug
          date
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_UNFEATURED_POSTS = gql`
  query getPosts {
    posts(filters: { featured: { eq: false } }) {
      data {
        attributes {
          title
          slug
          date
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_SKILLS = gql`
  query getSkill {
    skill {
      data {
        attributes {
          stack_skill(pagination: { limit: 30 }) {
            id
            title
            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_ABOUT = gql`
  query getAbout {
    about {
      data {
        attributes {
          description
          content
          author {
            author_title
            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query getPosts {
    posts {
      data {
        attributes {
          title
          slug
          date
          read_min
          content
          description
          seo_title
          featured
          image {
            data {
              attributes {
                url
              }
            }
          }
          author {
            author_title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          date
          read_min
          content
          description
          seo_title
          featured
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          author {
            author_title
            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;
