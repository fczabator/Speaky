export default {
  Topic: {},
  Query: {
    topics: async (parent, args, context) => {
      return [{id: 'aosdjiasd', description: 'asdpasod'}];
    },
    topic: async (parent, args, context) => {
      return {id: 'aosdjiasd', description: 'asdpasod'};
    }
  },
  Mutation: {}
};
