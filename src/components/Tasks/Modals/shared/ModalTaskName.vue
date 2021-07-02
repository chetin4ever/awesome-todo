<template>
  <div class="row q-mb-sm">
    <q-input
      :rules="[(val) => !!val || 'Field is required']"
      v-select-all
      :modelValue="name"
      @update:modelValue="(event) => $emit('update:name', event)"
      outlined
      label="Task name"
      class="col"
      autofocus
      clearable
      ref="name"
    />
  </div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";
export default {
  props: ["name"],

  data() {
    return {};
  },
  methods: {
    // updateValue(event) {
    //   console.log(event);
    //   this.$emit("update", event);
    // },
  },
  directives: {
    selectAll,
  },
};
</script>

<style>
</style>