import { profiles } from "../../mocks/profile.js";

export const typeDef = `
    type Profile {
        _id: String
        name: String
        phone: String
        email: String
    }

    type Query {
      profiles: [Profile]
    }
`

// phoneIsVerified
// emailIsVerified
// notificationToken
// isActive
// isOrderNotification
// isOfferNotification
// favourite
// addresses{
//   _id
//   label
//   deliveryAddress
//   details
//   location{coordinates}
//   selected
// }
export const resolvers = {
    Query: {
      profiles: () => profiles,
    }
  };