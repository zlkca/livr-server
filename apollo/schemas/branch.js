import { branches } from "../../mocks/branch.js";

export const typeDef = `
    type Branch {
        _id: String
        merchantId: String
        name: String
        phone: String
        email: String
        address: String
    }

    type Query {
        branches: [Branch]
        branch(id: String): Branch
    }
`

export const resolvers = {
    Query: {
      branches: () => branches,
      branch: (id) => branches.find(it => it._id === id),
    }
};