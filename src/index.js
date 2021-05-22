const fs = require('fs');
const path = require('path');
const {ApolloServer} = require('apollo-server');


let links = [{
  id: 'link-0',
  url: 'www.howtographl.com',
  description: "Fullstack tutorial for GraphQL"
}]

const resolvers = {
  Query: {
    info: () => 'This is the Api of Hackernews Clone with GraphQL',

    feed: () => links,
  },

  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
})

server
  .listen()
  .then(({url}) => console.log(`Server is running on ${url}`));