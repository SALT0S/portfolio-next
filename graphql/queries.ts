import { gql } from "@apollo/client";

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
          stack_skill {
            id
            title
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
