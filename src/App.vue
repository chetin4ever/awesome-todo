<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "App",
  methods: {
    ...mapActions("settings", ["getSettings"]),
  },
  mounted() {
    this.getSettings();
  },
});
</script>
<style lang="scss">
.text-strikethrough {
  text-decoration: line-through;
}
</style>
