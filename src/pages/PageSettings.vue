<template>
  <q-page padding class="q-mb-md">
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12HourTimeFormat" val="battery" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show Task In One List</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="showTaskInOneList" val="battery" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding>
      <q-item-label header>More</q-item-label>
      <q-item tag="label" v-ripple to="/settings/help">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple @click="visitOurWebsite">
        <q-item-section>
          <q-item-label>Visit Our Website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple @click="emailUs">
        <q-item-section>
          <q-item-label>Email Us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { openURL } from "quasar";

export default {
  computed: {
    ...mapGetters("settings", ["settings"]),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat;
      },
      set(value) {
        this.setShow12HourTimeFormat(value);
      },
    },
    showTaskInOneList: {
      get() {
        return this.settings.showTaskInOneList;
      },
      set(value) {
        this.setShowTaskInOneList(value);
      },
    },
  },
  methods: {
    ...mapActions("settings", [
      "setShow12HourTimeFormat",
      "setShowTaskInOneList",
    ]),
    visitOurWebsite() {
      openURL("http://google.com");
    },
    emailUs() {
      window.location.href =
        "mailto:hello@awesometodo?subject=Awesome Todo feedback";
    },
  },
};
</script>

<style>
</style>