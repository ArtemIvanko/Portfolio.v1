const Project = require("../models/Project");

const resolvers = {
  Query: {
    getProjects: async () => await Project.find(),
    getProject: async (_, { id }) => await Project.findById(id),
  },
  Mutation: {
    addProject: async (_, { topic, title, description, href, imgSrc }) => {
      const newProject = new Project({
        topic,
        title,
        description,
        href,
        imgSrc,
      });
      return await newProject.save();
    },
    deleteProject: async (_, { id }) => {
      await Project.findByIdAndDelete(id);
      return true;
    },
  },
};

module.exports = resolvers;
