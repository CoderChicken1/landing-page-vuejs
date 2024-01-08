<template>
  <section class="pb-xs-8 pb-sm-4" id="contact">
    <v-container class="px-sm-16 mb-sm-16">
      <v-row class="py-sm-15" align="center" justify="center">
        <v-col cols="6" xs="10">
          <h1
            class="display-2 font-weight-bold mb-sm-4 text-center white--text d-xs-inline text-uppercase"
          >
            say <span class="color-title">hello</span>
          </h1>
          <p class="body-2 font-weight-regular text-center white--text">
            Hello Sir! Thank you for visiting us. If you have any questions or
            need assistance, feel free to reach out to us. We're here to help!
          </p>
        </v-col>
      </v-row>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Your Email"
                outlined
                background-color="white"
                flat
                single-line
                class="rounded-xl"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Subject"
                outlined
                background-color="white"
                single-line
                class="rounded-xl"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-textarea
            outlined
            label="Your Message"
            background-color="white"
            height="250px"
            single-line
            class="rounded-xl"
          ></v-textarea>
          <v-row  align="center">
            <v-col cols="6" >
              <v-btn
                large
                class="px-10 white--text"
                width="170"
                color="orange"
                >Hire Us</v-btn
              >
            </v-col>
            <v-col class="d-sm-flex justify-end align-center" cols="12" sm="6">
              <v-btn
                v-for="(icon, i) in items"
                :key="i"
                class="mx-2 white--text"
                icon
              >
                <v-icon size="42" :color="icon.color">{{ icon.icon }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data: () => ({
    items: [
      { icon: "mdi-facebook", color: "facebook" },
      { icon: "mdi-twitter", color: "twitter" },
      { icon: "mdi-google-plus", color: "google" },
      { icon: "mdi-instagram", color: "instagram" },
      { icon: "mdi-email-outline", color: "email" },
    ],
  }),
};
</script>

<style scoped>
.color-title {
  color: #f7600e;
}
#contact {
  background-image: url("~@/assets/bgContact.png");
  object-fit: fill;
}
@media screen and (max-width: 600px) {
  .display-2 {
    font-size: 1.5rem !important;
  }
  .body-2 {
    font-size: 0.8rem !important;
  }
}
</style>