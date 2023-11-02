import _ from 'lodash';

import {
  typeDef as User,
  resolvers as userResolvers,
} from './user.js';

import {
  typeDef as Profile,
  resolvers as profileResolvers,
} from './profile.js';

export const typeDefs = [
  User,
  Profile
];

export const resolvers = _.merge({}, userResolvers, profileResolvers);