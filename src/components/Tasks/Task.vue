<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    tag="label"
    v-ripple
    clickable
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" class="no-pointer-events" />
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
      <div class="row">
        <q-btn
          flat
          round
          dense
          color="primary"
          icon="edit"
          @click.stop="showEditTask = true"
        />
        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="promtToDelete(id)"
        />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task @close="showEditTask = false" :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
import EditTask from "./Modals/EditTask.vue";

export default {
  components: { EditTask },
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false,
    };
  },
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