<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          :to="nav.to"
          :name="nav.lable"
          :icon="nav.icon"
          :label="nav.lable"
          v-for="nav in navs"
          :key="nav"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      bordered
      class="bg-primary"
      :width="250"
    >
      <q-list dark>
        <q-item-label header> Navigation </q-item-label>
        <q-item
          :to="nav.to"
          exact
          clickable
          v-ripple
          v-for="nav in navs"
          :key="nav"
          class="text-grey-4"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>{{ nav.lable }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          lable: "Todo",
          icon: "list",
          to: "/",
        },
        {
          lable: "settings",
          icon: "settings",
          to: "/settings",
        },
      ],
    };
  },
});
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer .q-router-link--exact-active {
  color: white !important;
}
</style>
