import { products } from "../../mocks/product.js";

export const typeDef = `
    type Product {
        _id: String
        title: String
        description: String
        image: String
        price: Float

    }

    type Query {
      products: [Product]
    }
`
// createdAt: String
// updatedAt: String
export const resolvers = {
    Query: {
      products: () => products,
    }
  };