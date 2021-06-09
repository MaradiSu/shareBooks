/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBooks = /* GraphQL */ `
  mutation CreateBooks(
    $input: CreateBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    createBooks(input: $input, condition: $condition) {
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
export const updateBooks = /* GraphQL */ `
  mutation UpdateBooks(
    $input: UpdateBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    updateBooks(input: $input, condition: $condition) {
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
export const deleteBooks = /* GraphQL */ `
  mutation DeleteBooks(
    $input: DeleteBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    deleteBooks(input: $input, condition: $condition) {
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
