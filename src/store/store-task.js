import { uid } from "quasar";
import Vue from "vue";

const state = {
  tasks: {
    // ID1: {
    //   name: "Go to shop",
    //   completed: false,
    //   dueDate: "2021/06/25",
    //   dueTime: "12:36",
    // },
    // ID2: {
    //   name: "Go gym",
    //   completed: false,
    //   dueDate: "2021/06/25",
    //   dueTime: "12:36",
    // },
    // ID3: {
    //   name: "Get banana",
    //   completed: false,
    //   dueDate: "2021/06/25",
    //   dueTime: "12:36",
    // },
  },
};
const mutations = {
  updateTask(state, payload) {
    console.log(payload + "from mutaion");
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    console.log("deleted ID:", id);
    delete state.tasks[id];
  },
  addTask(state, payload) {
    // Vue.set(state.tasks, payload.id, payload.task);
    // Vue.set(state.tasks, payload.id, payload.task);
    state.tasks[payload.id] = payload.task;
  },
};
const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    const task_id = uid();
    const payload = {
      id: task_id,
      task: task,
    };
    console.log(task);
    commit("addTask", payload);
  },
};

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
