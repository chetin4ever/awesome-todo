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
import ModalButtons from "./shared/ModalButtons.vue";
import ModalDueDate from "./shared/ModalDueDate.vue";
import ModalDueTime from "./shared/ModalDueTime.vue";
import ModalHeader from "./shared/ModalHeader.vue";
import ModalTaskName from "./shared/ModalTaskName.vue";

export default {
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons,
  },
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

    submitForm() {
      console.log(this.$refs.ModalTaskName);
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
        this.$emit("close");
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      console.log("submitted");
    },
  },
};
</script>

<style>
</style>