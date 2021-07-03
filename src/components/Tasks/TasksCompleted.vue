<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOutUp absolute-top"
  >
    <div :class="{ 'q-mt-lg': !settings.showTaskInOneList }">
      <list-header
        v-if="!settings.showTaskInOneList"
        bgcolor="bg-green"
        class="q-mt-lg"
        >Completed</list-header
      >
      <q-list
        bordered
        padding
        separator
        v-if="Object.keys(tasksCompleted).length"
      >
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        >
        </task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import ListHeader from "../shared/ListHeader.vue";
import Task from "./Task.vue";
import { mapGetters } from "vuex";

export default {
  components: { Task, ListHeader },
  props: ["tasksCompleted", "bgColor"],
  computed: {
    ...mapGetters("settings", ["settings"]),
  },
};
</script>

<style>
</style>