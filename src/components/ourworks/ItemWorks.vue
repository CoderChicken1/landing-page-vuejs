<template>
  <v-hover v-slot="{ hover }">
    <v-card flat class="d-flex rounded-xl">
      <v-img :src="img" aspect-ratio="1" class="grey lighten-2 rounded-xl">
        <v-expand-transition>
          <div :class="{ bgHover: hover }">
            <div
              v-if="hover"
              class="d-flex justify-center align-center transition-fast-in-fast-out white--text v-card--reveal"
              style="height: 100%"
            >
              <v-row cols="10" justify="center" align="center">
                <v-col class="d-flex flex-column justify-center align-center">
                  <h1 class="title text-uppercase text-center hidden-xs-only">
                    {{ title }}
                  </h1>
                  <p class="body-2 text-justify hidden-xs-only">
                    {{ content }}
                  </p>
                  <v-dialog
                    v-model="showEmptyComponent"                 
                    hide-overlay
                    transition="dialog-bottom-transition"
                  >
                    <template #activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        elevation="2"
                        color="white"
                        :x-small="$vuetify.breakpoint.xs"
                        class="button-hover"
                        href="https://github.com/CoderChicken1" 
                        target="_blank"
                      >
                        show project
                      </v-btn>
                    </template>
                  
                  </v-dialog>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
// import EmptyComponent from "./Empty.vue";
export default {
  name: "ItemWorks",
  data: () => ({
    showEmptyComponent: null,
  }),
  // components: {
  //   EmptyComponent,
  // },
  props: {
    title: {
      type: String,
      default: "PROJECT",
    },
    content: {
      type: String,
      default: "Introduce your project",
    },
    img: {
      type: String,
      default: require("../../assets/works-1.png"),
    },
  },
};
</script>

<style scoped>
.bgHover {
  position: relative;
  background: rgba(230, 96, 19, 0.8);
  width: 100%;
  height: 100%;
}
.v-card--reveal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.button-hover {
  color: #f7600e;
}
</style>