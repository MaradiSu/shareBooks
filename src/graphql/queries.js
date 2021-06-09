/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      books {
        items {
          id
          userId
          uri
          latitute
          longitude
          bookname
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        books {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBooks = /* GraphQL */ `
  query GetBooks($id: ID!) {
    getBooks(id: $id) {
      id
      userId
      user {
        id
        username
        email
        books {
          nextToken
        }
        createdAt
        updatedAt
      }
      uri
      latitute
      longitude
      bookname
      createdAt
      updatedAt
    }
  }
`;
export const listBookss = /* GraphQL */ `
  query ListBookss(
    $filter: ModelBooksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
        }
        uri
        latitute
        longitude
        bookname
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
