const { gql } = require("apollo-server");

const typeDefs = gql`
  type GetProjectQuery {
    id: ID!
    topic: String!
    title: String!
    description: String!
    href: String!
    imgSrc: String!
  }

  type Query {
    getProjects: [GetProjectQuery!]!
    getProject(id: ID!): GetProjectQuery
  }

  type Mutation {
    addProject(
      topic: String!
      title: String!
      description: String!
      href: String!
      imgSrc: String!
    ): GetProjectQuery!
    deleteProject(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
