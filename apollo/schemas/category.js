import { categories } from "../../mocks/category.js";

export const typeDef = `
    type Category {
        _id: String
        name: String
        image: String
        merchant: Merchant
    }

    type Query {
      categories: [Category]
      categoriesByMerchantID(id: String): [Category]
    }
`
// createdAt: String
// updatedAt: String
export const resolvers = {
    Query: {
      categories: () => categories,
      categoriesByMerchantID: (parent, args, contextValue, info) => categories.filter(it => it.merchant._id == args.id)
    }
  };