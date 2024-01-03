<template>
  <section class="pb-8" id="contact">
    <v-container class="px-16">
      <div class="py-15">
        <h1 class="display-2 font-weight-bold mb-4 text-center white--text">
          SAY <span class="color-title">HELLO</span>
        </h1>
        <p class="font-weight-regular text-center white--text">
          IT Outsourcing Company in Vietnam specialized in delivering
          tailor-made it solutions helping businesses in BFSI, Healthcare,
        </p>
      </div>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Your Email"
                outlined
                background-color="white"
                flat
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Subject"
                outlined
                background-color="white"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-textarea
            outlined
            label="Your Message"
            background-color="white"
            height="200px"
          ></v-textarea>
          <div class="footer-contact d-flex space-between">
            <v-btn
              large
              class="px-10 white--text"
              width="170"
              background
              color="orange"
              >Hire Us</v-btn
            >
            
            <v-card-text class="d-flex justify-end pa-0">
              <v-btn
                v-for="(icon, i) in items"
                :key="i"
                class="mx-2 white--text"
                icon
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>
          </div>
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
      "mdi-facebook",
      "mdi-twitter",
      "mdi-teamviewer",
      "mdi-instagram",
      "mdi-email-outline",
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
}
</style>