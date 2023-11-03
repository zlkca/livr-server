import _ from 'lodash';

import {
  typeDef as User,
  resolvers as userResolvers,
} from './user.js';

import {
  typeDef as Profile,
  resolvers as profileResolvers,
} from './profile.js';

import {
  typeDef as Merchant,
  resolvers as merchantResolvers,
} from './merchant.js';

import {
  typeDef as Product,
  resolvers as productResolvers,
} from './product.js';

import {
  typeDef as Order,
  resolvers as orderResolvers,
} from './order.js';

export const typeDefs = [
  User,
  Profile,
  Merchant,
  Product,
  Order,
];

export const resolvers = _.merge({}, 
  userResolvers,
  profileResolvers,
  merchantResolvers,
  productResolvers,
  orderResolvers
);