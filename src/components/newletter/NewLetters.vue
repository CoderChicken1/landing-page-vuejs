<template>
  <section id="newsletter" class="bg">
    <v-container>
      <v-row class="align-center justify-center my-sm-15">
        <v-col cols="12" sm="6" align-self="center">
          <v-text-field
            label="Enter Your email address for newsletter"
            outlined
            background-color="white"
            class="rounded-lg"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="3">
          <v-btn
            color="#f7600e"
            height="50px"
            block
            class="rounded-lg font-weight-bold text-uppercase white--text"
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
    // newSub: {
    //   name: "",
    //   email: "",
    // },
    // nameRules: [(v) => !!v || "Name is required"],
    //   emailRules: [
    //     v => !!v || 'E-mail is required',
    //     v => /.+@.+/.test(v) || 'E-mail must be valid',
    //   ],
  }),
  methods: {},
};
</script>

<style scoped>
.bg {
  background-image: url("~@/assets/bgLetter.png");
}
.text-field {
  padding: 0 !important;
  margin: 0 !important;
}
.btn-letter {
  padding: 0 60px !important;
}
@media (max-width: 600px) {
  .btn-letter {
    padding: 20px !important;
  }
}
</style>