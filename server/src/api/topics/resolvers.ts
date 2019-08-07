export default {
  Topic: {},
  Query: {
    topics: async (parent: void, args: void) => {
      return [{id: 'aosdjiasd', description: 'asdpasod'}];
    },
    topic: async (parent: void, args: void) => {
      return {id: 'aosdjiasd', description: 'asdpasod'};
    }
  },
  Mutation: {}
};
