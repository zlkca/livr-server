import { merchants } from "../../mocks/merchant.js";

export const typeDef = `
    type Merchant {
        _id: String
        name: String
        phone: String
        email: String
        branches: [Branch]
    }

    type Query {
        merchants: [Merchant]
        merchant(id: String): Merchant
    }
`

export const resolvers = {
    Query: {
      merchants: () => merchants,
      merchant: (id) => merchants.find(it => it._id === id),
    }
};