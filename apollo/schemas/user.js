// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

import { users } from "../../mocks/user.js";


//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// export const User = `
// query Users {
//   users {
//     _id
//    email
//  }
// }`

export const typeDef = `
    type User {
        _id: String
        name: String
        phone: String
        email: String
    }

    type Query {
      users: [User]
    }
`

export const resolvers = {
    Query: {
      users: () => users
    }
  };
  