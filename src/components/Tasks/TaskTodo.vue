<template>
  <list-header bgcolor="bg-orange-4">Todo</list-header>
  <q-list bordered padding separator v-if="Object.keys(tasksTodo).length">
    <task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key">
    </task>
  </q-list>
</template>

<script>
import ListHeader from "../shared/ListHeader.vue";
import Task from "./Task.vue";

export default {
  components: { Task, ListHeader },
  props: ["tasksTodo"],
};
</script>

<style>
</style>