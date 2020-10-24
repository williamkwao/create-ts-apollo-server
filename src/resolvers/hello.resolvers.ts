import { IResolvers } from "graphql-tools";


const HelloResolver: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
  },
};
export default HelloResolver;
