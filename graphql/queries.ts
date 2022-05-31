import { gql } from "@apollo/client";

export const GET_ALL_FEATURED_POSTS = gql`
  query getPosts {
    posts(filters: { featured: { eq: true } }) {
      data {
        attributes {
          title
          slug
          date
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

/* export const GET_POST = gql`
  query getPost($where: JSON!) {
    posts(where: $where) {
      id
      slug
      title
      tags
      description
      image {
        url
      }
      content
      author {
        username
        picture {
          url
        }
      }
      published_at
    }
  }
`;  */
