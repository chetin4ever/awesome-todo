<template>
  <q-page padding class="q-pa-md">
    <div class="q-pa-md absolute full-width full-height column">
      <template v-if="taskDownloaded">
        <div class="row q-mb-lg">
          <search />
          <sort />
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

        <q-scroll-area class="q-scroll-area-tasks">
          <no-task
            v-if="
              !Object.keys(tasksTodo).length &&
              !search &&
              !settings.showTaskInOneList
            "
            @showAddTask="showAddTask = true"
          />
          <task-todo
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"
          />

          <tasks-completed
            :tasksCompleted="tasksCompleted"
            v-if="Object.keys(tasksCompleted).length"
            class="q-mb-xl"
          />
        </q-scroll-area>

        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            size="24px"
            round
            color="primary"
            icon="add"
            @click="showAddTask = true"
            class="all-pointer-events"
          />
        </div>
      </template>
      <template v-else>
        <q-spinner color="primary" size="3em" class="absolute-center" />
      </template>
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = !showAddTask" />
    </q-dialog>
  </q-page>
</template>
<style>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>

<script>
import { mapGetters, mapState } from "vuex";

import TaskTodo from "src/components/Tasks/TaskTodo.vue";
import TasksCompleted from "src/components/Tasks/TasksCompleted.vue";
import AddTask from "src/components/Tasks/Modals/AddTask.vue";
import NoTask from "src/components/Tasks/NoTask.vue";
import Search from "src/components/Tasks/Tools/Search.vue";
import Sort from "src/components/Tasks/Tools/Sort.vue";

export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState("tasks", ["search", "taskDownloaded"]),
    // tasks() {
    //   return this.$store.getters["tasks/tasks"];
    // },

    ...mapGetters("settings", ["settings"]),
  },
  components: {
    TaskTodo,
    TasksCompleted,
    AddTask,
    NoTask,
    Search,
    Sort,
  },
};
</script>
  