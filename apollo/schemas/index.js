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
  typeDef as Branch,
  resolvers as branchResolvers,
} from './branch.js';

import {
  typeDef as Category,
  resolvers as categoryResolvers,
} from './category.js';

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
  Branch,
  Category,
  Product,
  Order,
];

export const resolvers = _.merge({}, 
  userResolvers,
  profileResolvers,
  merchantResolvers,
  branchResolvers,
  categoryResolvers,
  productResolvers,
  orderResolvers
);