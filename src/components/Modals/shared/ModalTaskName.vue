<template>
  <div class="row q-mb-sm">
    {{ name }}
    <q-input
      :rules="[(val) => !!val || 'Field is required']"
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
};
</script>

<style>
</style>