<template>
  <q-page padding>
    <q-list bordered padding separator>
      <q-item
        @click="completed = !completed"
        tag="label"
        v-ripple
        v-for="task in tasks"
        :key="task.id"
        clickable
        :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough': task.completed }">{{
            task.name
          }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label caption class="row justify-end">{{
                task.dueDate
              }}</q-item-label>
              <q-item-label caption class="row justify-end">{{
                task.dueTime
              }}</q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters("tasks", ["tasks"]),
    // tasks() {
    //   return this.$store.getters["tasks/tasks"];
    // },
  },
};
</script>
