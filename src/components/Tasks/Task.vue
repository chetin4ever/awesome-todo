<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    tag="label"
    v-ripple
    clickable
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrough': task.completed }"
        v-html="$options.computed.searchHeighLight(task.name, search)"
      ></q-item-label>
    </q-item-section>
    <q-item-section side top>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label
            caption
            class="row justify-end"
            v-html="$options.computed.niceDate(task.dueDate)"
          ></q-item-label>
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
import { mapActions, mapState } from "vuex";
import EditTask from "./Modals/EditTask.vue";
import { date } from "quasar";

export default {
  components: { EditTask },

  props: ["task", "id"],
  data() {
    return {
      showEditTask: false,
    };
  },
  computed: {
    ...mapState("tasks", ["search"]),
    niceDate(value) {
      const { formatDate } = date;
      return formatDate(value, "MMM D");
    },
    searchHeighLight(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, "ig");
        return value.replace(searchRegExp, (match) => {
          return "<span class='bg-yellow-6'>" + match + "</span>";
        });
      }
      return value;
      console.log(search);
    },
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
    showEditTaskModal() {
      this.showEditTask = true;
    },
  },
};
</script>

<style>
</style>