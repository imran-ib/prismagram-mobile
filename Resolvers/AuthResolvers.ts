import gql from "graphql-tag";

export const Me = gql`
  query Me {
    CurrentUser {
      id
      email
      firstName
      lastName
      fullName
      avatar
      bio
      username
      likes {
        id
      }
      posts {
        id
      }
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        caption
      }
    }
  }
`;

export const CONFIRM_LOGIN_SECRETE = gql`
  mutation CONFIRM_LOGIN_SECRETE($email: String!, $key: String!) {
    ConfirmSecret(email: $email, key: $key)
  }
`;

export const REQUEST_LOGIN_SECRETE = gql`
  mutation REQUEST_LOGIN_SECRETE($email: String!) {
    RequestLoginSecret(email: $email) {
      email
    }
  }
`;

export const USER_SIGNUP_MUTATION = gql`
  mutation USER_SIGNUP_MUTATION(
    $username: String!
    $email: String!
    $firstName: String
    $lastName: String
    $avatar: String
    $bio: String
  ) {
    createUser(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
      avatar: $avatar
      bio: $bio
    ) {
      id
      email
      fullName
      email
    }
  }
`;
