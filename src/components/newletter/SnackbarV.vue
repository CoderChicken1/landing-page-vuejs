<template>
  <v-snackbar v-model="show" v-bind="{ ...$attrs, ...$props }">
    {{ content }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text @click="show = false" v-bind="attrs">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",
  data: () => ({
    // localSnackbar: false,
  }),
  props: {
    snackbar: { type: Boolean, default: false },
    content: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    // chuyen localSnackbar thanh false neu khong an nut close
  },
  // watch: {
  //   snackbar: {
  //     immediate: true,
  //     handler(val) {
  //       this.localSnackbar = val;
  //       console.log("localSnackbar:", this.localSnackbar);
  //     },
  //   },
  // },
  computed: {
    show: {
      get() {
        return this.snackbar;
      },
      set(value) {
        this.$emit("close-snackbar", value);
      },
    },
  },
  inheritAttrs: false,
};
</script>

<style>
</style>