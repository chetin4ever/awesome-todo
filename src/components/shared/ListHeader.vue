<template>
  <q-banner
    dense
    inline-actions
    class="list-header text-white text-center"
    :class="bgcolor"
  >
    <span class="text-bold text-subtitle1"><slot></slot></span>
  </q-banner>
</template>

<script>
export default {
  props: ["bgcolor"],
};
</script>

<style>
.list-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>