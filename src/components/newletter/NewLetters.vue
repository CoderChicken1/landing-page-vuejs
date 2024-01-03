<template>
  <section id="newsletter" class="bg">
    <v-container>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="6">
            <v-text-field
              v-model="newSub.name"
              :rules="nameRules"
              label="Enter Your email address for newsletter"
              outlined
              background-color="white"
              class="mt-6"
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-btn
              color="#f7600e"
              class="font-weight-bold text-uppercase white--text btn-letter"
              >Subscribe</v-btn
            >
          </v-col>
        </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "NewLetter",
  data: () => ({
    //   showAlert: false,
    //   alertType: 'ok',
    //   alertMessage: '',
    newSub: {
      name: "",
      email: "",
    },
    nameRules: [(v) => !!v || "Name is required"],
    //   emailRules: [
    //     v => !!v || 'E-mail is required',
    //     v => /.+@.+/.test(v) || 'E-mail must be valid',
    //   ],
  }),
  methods: {
  },
};
</script>

<style scoped>
.bg {
  background-image: url("~@/assets/bgLetter.png");
  height: 150px;
}
.btn-letter {
  padding: 0 60px !important;
}
</style>