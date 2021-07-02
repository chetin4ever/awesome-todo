<template>
  <q-select
    filled
    v-model="sortBy"
    map-options
    :options="options"
    label="Sort By"
    class="col q-ml-sm"
    emit-value
  />
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      options: [
        { label: "Name", value: "name" },
        { label: "Date", value: "dueDate" },
      ],
    };
  },
  computed: {
    ...mapState("tasks", ["sort"]),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      },
    },
  },
  methods: {
    ...mapActions("tasks", ["setSort"]),
  },
};
</script>

<style scoped>
.q-select {
  flex: 0 0 115px;
}
</style>