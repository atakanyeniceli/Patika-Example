import { ApolloServer } from "@apollo/server";
import { resolvers } from "./Graphql/Resolver/index.js";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./Graphql/Schema/index.js";
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});
console.log('Server is up at ', url);
