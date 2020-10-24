import 'graphql-import-node';
import * as typeDefs from './schema/schema.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { IResolvers } from "graphql-tools";

import resolvers from './resolver-map';
import { GraphQLSchema } from 'graphql';
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers as IResolvers
});
export default schema;