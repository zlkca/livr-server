import { orders } from "../../mocks/order.js";

export const typeDef = `
    type OrderItem {
        _id: String
        product: Product
        quantity: Int
    }

    type Order {
        _id: String
        status: String
        user: User
        merchant: Merchant
        items: [OrderItem]
        createdAt: String
        updatedAt: String
    }

    type Query {
      orders: [Order]
    }
`

// deliveryAddress: {address}
// _id
// orderId
// restaurant{
//   _id
//   name
//   image
//   address
//   location{coordinates}
// }
// deliveryAddress{
//   location{coordinates}
//   deliveryAddress
//   details
//   label
// }
// items{
//   _id
//   title
//   description
//   image
//   quantity
//   variation{
//     _id
//     title
//     price
//     discounted
//   }
//   addons{
//     _id
//     options{
//       _id
//       title
//       description
//       price
//     }
//     description
//     title
//     quantityMinimum
//     quantityMaximum
//   }
//   specialInstructions
//   isActive
//   createdAt
//   updatedAt
// }
// user{
//   _id
//   name
//   phone
//   email
// }
// paymentMethod
// paidAmount
// orderAmount
// orderStatus
// tipping
// taxationAmount
// status
// paymentStatus
// reason
// isActive
// createdAt
// orderDate
// deliveryCharges
// isPickedUp
// preparationTime
// acceptedAt
// isRinged
// rider{
//   _id
//   name
//   username
//   available
// }
// }
export const resolvers = {
    Query: {
      orders: () => orders,
    }
  };