export const selectAll = {
  mounted: function (el) {
    // let input = this.$refs.name;
    // console.log(input);
    // // this.$refs.name.$el.addEventListener("focus", function () {
    // //   input.select();
    // // });

    let input = el.querySelector(".q-field__native");
    input.addEventListener("focus", () => {
      if (input.value.length) {
        input.select();
      }
    });

    console.log(input, "from task name");
  },
};
