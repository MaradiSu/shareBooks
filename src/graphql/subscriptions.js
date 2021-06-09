/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBooks = /* GraphQL */ `
  subscription OnCreateBooks {
    onCreateBooks {
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
export const onUpdateBooks = /* GraphQL */ `
  subscription OnUpdateBooks {
    onUpdateBooks {
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
export const onDeleteBooks = /* GraphQL */ `
  subscription OnDeleteBooks {
    onDeleteBooks {
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
