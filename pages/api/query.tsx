import { gql } from "@apollo/client";
import { GraphQLSchema } from 'graphql';

const { buildSchema } = require('graphql');

export const REPOSITORY_FRAGMENT = gql`
  fragment repository on Repository {
    id
    name
    url
    createdAt
    updatedAt
    descriptionHTML
    primaryLanguage {
      name
    }
    owner {
      login
      url
    }
    stargazers {
      totalCount
    }
    viewerHasStarred
    watchers {
      totalCount
    }
    viewerSubscription
    
    defaultBranchRef {
      name
    }
    
  }
`;

const GET_GIT_INFO = gql`
  query($cursor: String) {
    viewer {
      ... on User {
        login
        name
        bio
        company
        location
        avatarUrl
        repositories(
          first: 100
          orderBy: {field:UPDATED_AT, direction: DESC}
          after: $cursor
        ) {
          edges {
            node {
              ...repository
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;

export default GET_GIT_INFO;