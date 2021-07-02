<template>
  <q-input
    v-model="searchField"
    label="Search"
    outlined
    class="col"
    @keyup.esc="searchField = ''"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions("tasks", ["setSearch"]),
  },
  computed: {
    ...mapState("tasks", ["search"]),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        console.log(value);
        this.setSearch(value);
      },
    },
  },
};
</script>

<style>
</style>