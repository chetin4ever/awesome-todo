<template>
  <q-page padding class="q-pa-md">
    <div class="row q-mb-lg">
      <search />
    </div>
    <p
      v-if="
        search &&
        !Object.keys(tasksTodo).length &&
        !Object.keys(tasksCompleted).length
      "
    >
      No Search Result.
    </p>
    <no-task
      v-if="!Object.keys(tasksTodo).length && !search"
      @showAddTask="showAddTask = true"
    />
    <task-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

    <tasks-completed
      :tasksCompleted="tasksCompleted"
      v-if="Object.keys(tasksCompleted).length"
    />

    <div
      class="absolute-bottom text-center q-mb-lg"
      @click="showAddTask = true"
    >
      <q-btn size="24px" round color="primary" icon="add" />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = !showAddTask" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import TaskTodo from "src/components/Tasks/TaskTodo.vue";
import TasksCompleted from "src/components/Tasks/TasksCompleted.vue";
import AddTask from "src/components/Tasks/Modals/AddTask.vue";
import NoTask from "src/components/Tasks/NoTask.vue";
import Search from "src/components/Tasks/Tools/Search.vue";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState("tasks", ["search"]),
    // tasks() {
    //   return this.$store.getters["tasks/tasks"];
    // },
  },
  components: {
    TaskTodo,
    TasksCompleted,
    AddTask,
    NoTask,
    Search,
  },
};
</script>
  