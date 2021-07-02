import ModalButtons from "src/components/Tasks/Modals/shared/ModalButtons";
import ModalDueDate from "src/components/Tasks/Modals/shared/ModalDueDate.vue";
import ModalDueTime from "src/components/Tasks/Modals/shared/ModalDueTime.vue";
import ModalHeader from "src/components/Tasks/Modals/shared/ModalHeader.vue";
import ModalTaskName from "src/components/Tasks/Modals/shared/ModalTaskName.vue";
export default {
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons,
  },
  methods: {
    submitForm() {
      console.log(this.$refs.ModalTaskName);
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
  },
};
