<template>
  <q-page padding class="q-pa-md">
    <no-task
      v-if="!Object.keys(tasksTodo).length"
      @showAddTask="showAddTask = true"
    />
    <task-todo v-else :tasksTodo="tasksTodo" />

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
import { mapGetters } from "vuex";

import TaskTodo from "src/components/Tasks/TaskTodo.vue";
import TasksCompleted from "src/components/Tasks/TasksCompleted.vue";
import AddTask from "src/components/Tasks/Modals/AddTask.vue";
import NoTask from "src/components/Tasks/NoTask.vue";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    // tasks() {
    //   return this.$store.getters["tasks/tasks"];
    // },
  },
  components: {
    TaskTodo,
    TasksCompleted,
    AddTask,
    NoTask,
  },
};
</script>
  