<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOutUp absolute-top"
  >
    <div class="q-mt-lg">
      <list-header bgcolor="bg-green" class="q-mt-lg">Completed</list-header>
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

export default {
  components: { Task, ListHeader },
  props: ["tasksCompleted", "bgColor"],
};
</script>

<style>
</style>