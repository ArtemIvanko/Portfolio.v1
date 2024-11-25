const Project = require("../models/Project");
const Skill = require("../models/Skill");

const resolvers = {
  Query: {
    getProjects: async () => await Project.find(),
    getProject: async (_, { id }) => await Project.findById(id),
    getSkills: async () => await Skill.find(),
    getSkill: async (_, { id }) => await Skill.findById(id),
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
    addSkill: async (_, { icon, title, description }) => {
      const newSkill = new Skill({
        icon,
        title,
        description,
      });
      return await newSkill.save();
    },
  },
};

module.exports = resolvers;
