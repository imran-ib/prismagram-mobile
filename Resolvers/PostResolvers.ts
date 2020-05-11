import gql from 'graphql-tag';

export const SEARCH = gql`
  query SEARCH($term: String!) {
    SearchPost(term: $term) {
      id
      caption
      files {
        id
        file
      }
      likes {
        id
      }
    }
    UserSearch(term: $term) {
      id
      avatar
      username
      postCount
      following {
        id
      }
    }
  }
`;

export const FEEDS_QUERY = gql`
  query FEEDS_QUERY {
    Feeds {
      id
      caption
      location
      authorId
      comments {
        id
      }

      author {
        id
        email
        username
      }

      likes {
        id
        user {
          id
          username
        }
      }
      files {
        id
        file
      }
      createdAt
      updatedAt
    }
  }
`;

export const TOGGLE_LIKE_MUTATION = gql`
  mutation TOGGLE_LIKE_MUTATION($postId: String!) {
    ToggleLikePost(postId: $postId)
  }
`;

export const COMMENT_MUTATION = gql`
  mutation COMMENT_MUTATION($text: String!, $postId: String!) {
    CreateComment(text: $text, postId: $postId) {
      id
      text
    }
  }
`;

export const COMMENTS_FOR_POST_QUERY = gql`
  query COMMENTS_FOR_POST_QUERY($postId: String!) {
    Comments(postId: $postId) {
      id
      text
      author {
        username
      }
      post {
        caption
      }
    }
  }
`;
