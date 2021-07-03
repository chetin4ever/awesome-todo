<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top "
  >
    <div>
      <list-header v-if="!settings.showTaskInOneList" bgcolor="bg-orange-4"
        >Todo</list-header
      >
      <q-list bordered padding separator v-if="Object.keys(tasksTodo).length">
        <task
          v-for="(task, key) in tasksTodo"
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
import { mapGetters } from "vuex";
import ListHeader from "../shared/ListHeader.vue";
import Task from "./Task.vue";

export default {
  components: { Task, ListHeader },
  props: ["tasksTodo"],
  computed: {
    ...mapGetters("settings", ["settings"]),
  },
};
</script>

<style>
</style>