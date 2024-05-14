<template>
<div class="text-center">
 <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        color="green"
        size="64"
      ></v-progress-circular>
    </v-overlay>
</div>
</template>

<script>
export default {
    name: "LoadingCircle",
  data: () => ({
    overlay: true,
    timeOut: null,
  }),

  methods: {
    name() {
     this.timeOut=setTimeout(() => {
          this.overlay = false;
        }, 3000);
    }
  },
  mounted(){
    this.name();
  }
};
</script>

<style>
</style>