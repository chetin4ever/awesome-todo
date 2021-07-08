import { uid } from "quasar";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import Vue from "vue";

const state = {
  tasks: {
    // ID1: {
    //   name: "Go to shop",
    //   completed: false,
    //   dueDate: "2021/06/10",
    //   dueTime: "10:36",
    // },
    // ID2: {
    //   name: "Go gym",
    //   completed: false,
    //   dueDate: "2021/08/25",
    //   dueTime: "1:02",
    // },
    // ID3: {
    //   name: "Get banana",
    //   completed: false,
    //   dueDate: "2021/09/25",
    //   dueTime: "18:35",
    // },
    // ID4: {
    //   name: "Go to shop",
    //   completed: false,
    //   dueDate: "2021/06/10",
    //   dueTime: "10:36",
    // },
    // ID5: {
    //   name: "Go gym",
    //   completed: false,
    //   dueDate: "2021/08/25",
    //   dueTime: "1:02",
    // },
  },
  search: "",
  sort: "name",
  taskDownloaded: false,
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
  setSort(state, value) {
    state.sort = value;
  },
  setTaskDownloaded(state, value) {
    state.taskDownloaded = value;
  },
};
const actions = {
  updateTask({ dispatch }, payload) {
    dispatch("fbUpdateTask", payload);
  },
  deleteTask({ dispatch }, id) {
    dispatch("fbDeleteTask", id);
  },
  addTask({ dispatch }, task) {
    const task_id = uid();
    const payload = {
      id: task_id,
      task: task,
    };
    console.log(task);
    dispatch("fbAddTask", payload);
  },
  setSearch({ commit }, value) {
    commit("setSearch", value);
  },
  setSort({ commit }, value) {
    commit("setSort", value);
  },
  fbReadData({ commit }, value) {
    console.log("redaing data from firebase");
    // console.log(firebaseAuth.currentUser.uid);

    let userId = firebaseAuth.currentUser.uid;
    let userTasks = firebaseDb.ref("tasks/" + userId);
    // console.log(userTasks);

    // initial check for data
    userTasks.once("value", (snapshot) => {
      commit("setTaskDownloaded", true);
    });
    // child added
    userTasks.on("child_added", (snapshot) => {
      console.log(snapshot.val());
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        task: task,
      };
      commit("addTask", payload);
    });
    // child changed
    userTasks.on("child_changed", (snapshot) => {
      console.log(snapshot.val());
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: task,
      };
      commit("updateTask", payload);
    });
    // child delele
    userTasks.on("child_removed", (snapshot) => {
      let taskId = snapshot.key;
      commit("deleteTask", taskId);
    });
  },
  fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    taskRef.set(payload.task);
    console.log(payload);
  },
  fbUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    taskRef.update(payload.updates);
    console.log(payload);
  },
  fbDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + taskId);
    taskRef.remove();
  },
};

const getters = {
  tasksSorted: (state) => {
    let tasksSorted = {},
      keysOrdered = Object.keys(state.tasks);
    // console.log(keysOrdered, "from sorted");
    keysOrdered.sort((a, b) => {
      console.log(state.sort, "sss");
      let taskAprop = state.tasks[a][state.sort].toLowerCase(),
        taskBprop = state.tasks[b][state.sort].toLowerCase();
      if (taskAprop > taskBprop) return 1;
      else if (taskAprop < taskBprop) return -1;
      else return 0;
    });
    // console.log("keysOrdered", keysOrdered);
    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key];
    });
    console.log(tasksSorted, "taskSorted");
    return tasksSorted;
  },

  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted;
    let tasksFiltered = {};
    if (state.search) {
      Object.keys(tasksSorted).forEach(function (key) {
        let task = tasksSorted[key],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase();
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return tasksSorted;
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
