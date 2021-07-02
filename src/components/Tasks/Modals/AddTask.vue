<template>
  <q-card>
    <q-form @submit="submitForm">
      <modal-header>Add Task</modal-header>

      <q-card-section class="q-pt-none">
        <!-- <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" /> -->
        <modal-task-name v-model:name="taskToSubmit.name" ref="modalTaskName" />
        <modal-due-date v-model:dueDate="taskToSubmit.dueDate" />
        <modal-due-time
          v-if="taskToSubmit.dueDate"
          v-model:dueTime="taskToSubmit.dueTime"
        />
      </q-card-section>

      <modal-buttons />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import mixinAddEditTask from "src/mixins/mixins-add-edit-task";

export default {
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),

    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
      console.log("submitted");
    },
  },
};
</script>

<style>
</style>