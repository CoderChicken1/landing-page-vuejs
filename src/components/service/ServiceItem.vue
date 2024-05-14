<template>
  <v-card flat>
    <div class="flex-center mb-4">
      <div class="circle1">
        <v-img :src="img" max-height="60px" max-width="60px"></v-img>
      </div>
    </div>
    <v-card flat height="180">
      <h1 class="font-weight-regular mb-2">{{ title }}</h1>
      <p
        class="font-weight-regular subtitle-1 overflow-hidden ma-0 text-center "
      >
        {{ text }}
      </p>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "ServiceItem",
  props: {
    img: {
      type: String,
      default: require("@/assets/print-1.png"),
    },
    title: {
      type: String,
      default: "Johan",
    },
    text: {
      type: String,
      default: "dev newbie",
    },
  },
};
</script>

<style scoped>
.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>