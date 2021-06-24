const state = {
  tasks: [
    {
      id: 1,
      name: "Go to shop",
      completed: false,
      dueDate: "2021/06/25",
      dueTime: "12:36",
    },
    {
      id: 2,
      name: "Go gym",
      completed: false,
      dueDate: "2021/06/25",
      dueTime: "12:36",
    },
    {
      id: 3,
      name: "Get banana",
      completed: false,
      dueDate: "2021/06/25",
      dueTime: "12:36",
    },
  ],
};
const mutations = {};
const actions = {};
// const getters = {
//   tasks: (state) => {
//     return state.tasks;
//   },
// };
const getters = {
  tasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
