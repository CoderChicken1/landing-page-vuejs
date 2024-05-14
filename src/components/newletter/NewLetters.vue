<template>
  <section id="newsletter" class="bgLetter">
    <v-container class="content-letter">
      <v-row class="align-center justify-center my-sm-15">
        <v-col cols="12" sm="6" align-self="center">
          <v-text-field
            v-model="email"
            label="Enter Your email address for newsletter"
            placeholder="Email"
            solo
            background-color="white"
            class="my-textfield rounded-lg"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="3">
          <v-btn
            color="#f7600e"
            height="50px"
            block
            class="rounded-lg font-weight-bold text-uppercase white--text"
            @click="subscribe"
            >Subscribe</v-btn
          >
        </v-col>
      </v-row>
      <!-- <v-snackbar v-model="snackbar" top color="primary" text>
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar> -->
      <Snackbar
        top
        text
        :color="color"
        :content="text"
        :snackbar="snackbar"
        @close-snackbar="closeSnackbar"
      />
    </v-container>
  </section>
</template>

<script>
import Snackbar from "./SnackbarV.vue";
export default {
  name: "NewLetter",
  components: {
    Snackbar,
  },
  data: () => ({
    email: "",
    snackbar: false,
    text: "",
    color: "orange",
  }),
  methods: {
    subscribe() {
      if (this.validateEmail(this.email)) {
        // Email is valid, extract text before '@'
        // Display thank you message with the extracted text
        this.text = "Thank you for subscribing!";
        // Clear the email field
        this.email = "";
      } else {
        // Email is not valid
        this.text = "Please enter a valid email address";
        this.email = "";
      }
        this.snackbar = true;
    },
    validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(email);
    },
    closeSnackbar() {
      this.snackbar = false;
    },
  },
};
</script>

<style scoped>
.bgLetter {
  background-image: url("~@/assets/bgLetter.png");
  object-fit: fill;
  position: relative;
}
.bgLetter::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(59, 67, 76, 0.9);
}
.content-letter {
  position: relative;
}
.v-text-field >>> .v-input__control {
  color: #f7600e;
}
</style>
