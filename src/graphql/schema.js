const { gql } = require("apollo-server");

const typeDefs = gql`
  enum IconVariant {
    github
    pinterest
    twitter
    telegram
    css
    figma
    git
    html
    js
    node
    npm
    react
    yarn
    sass
    webpack
    ts
    mui
    handshake
    analytics
  }

  type GetProjectQuery {
    id: ID!
    topic: String!
    title: String!
    description: String!
    href: String!
    imgSrc: String!
  }

  type GetSkillQuery {
    id: ID!
    icon: [IconVariant]!
    title: String!
    description: String!
  }

  type Query {
    getProjects: [GetProjectQuery!]!
    getProject(id: ID!): GetProjectQuery
    getSkills: [GetSkillQuery!]!
    getSkill(id: ID!): GetSkillQuery
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
    addSkill(
      icon: [String]!
      title: String!
      description: String!
    ): GetSkillQuery
  }
`;

module.exports = typeDefs;
