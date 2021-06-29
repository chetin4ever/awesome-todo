import { uid } from "quasar";
import Vue from "vue";

const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2021/06/25",
      dueTime: "12:36",
    },
    ID2: {
      name: "Go gym",
      completed: false,
      dueDate: "2021/06/25",
      dueTime: "12:36",
    },
    ID3: {
      name: "Get banana",
      completed: false,
      dueDate: "2021/06/25",
      dueTime: "12:36",
    },
  },
  search: "",
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
  setSearch(state, value) {
    state.search = value;
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
  setSearch({ commit }, value) {
    commit("setSearch", value);
  },
};

const getters = {
  tasksFiltered: (state) => {
    let tasksFiltered = {};
    if (state.search) {
      Object.keys(state.tasks).forEach(function (key) {
        let task = state.tasks[key],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase();
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return state.tasks;
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
