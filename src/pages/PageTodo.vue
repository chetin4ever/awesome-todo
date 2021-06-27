<template>
  <q-page padding>
    <q-list bordered padding separator v-if="Object.keys(tasks).length">
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key">
      </task>
    </q-list>
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
import Task from "components/Tasks/Task.vue";
import { mapGetters } from "vuex";
import AddTask from "src/components/Modals/AddTask.vue";
export default {
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks"]),
    // tasks() {
    //   return this.$store.getters["tasks/tasks"];
    // },
  },
  components: {
    Task,
    AddTask,
  },
  Task,
};
</script>
  