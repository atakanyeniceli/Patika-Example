const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { authors, books } = require("./data");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: Int
    name: String
    authorID: Int
    pageCount: Int
    author: [Author]
  }

  type Author{
    id:Int
    firstName:String
    lastName:String
    books: [Book]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    book(id:Int!):Book
    authors:[Author]
    author(id:Int!):Author
  }`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id === args.id),

    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id === args.id),
  },
  Book: {
    author: (parent) =>
      authors.filter((author) => author.id === parent.authorID),
  },

  Author: {
    books: (parent) => books.filter((book) => book.authorID === parent.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) =>
  console.log("Server is up at ", url)
);
