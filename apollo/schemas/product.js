import { products } from "../../mocks/product.js";

export const typeDef = `
    type Product {
        _id: String
        name: String
        description: String
        image: String
        price: Float
        category: Category
        merchant: Merchant
    }

    type Query {
      products: [Product]
      productsByMerchantID(id: String): [Product]
    }
`
// createdAt: String
// updatedAt: String
export const resolvers = {
    Query: {
      products: () => products,
      productsByMerchantID: (parent, args, contextValue, info) => products.filter(it => it.merchant._id === args.id),
    }
  };