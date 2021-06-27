<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    tag="label"
    v-ripple
    clickable
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
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
    <q-item-section side top>
      <q-btn
        flat
        round
        dense
        color="red"
        icon="delete"
        @click.stop="promtToDelete(id)"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promtToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete?",
          cancel: {
            color: "negative",
          },
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    },
  },
};
</script>

<style>
</style>