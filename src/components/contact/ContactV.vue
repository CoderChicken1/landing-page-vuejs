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
               dense
                single-line
                append-icon="mdi-email-heart-outline"
                class="rounded-lg text-field-left"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Subject"
                outlined
                dense
                background-color="white"
                append-icon="mdi-book-outline"
                single-line
                class="rounded-lg text-field-right"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-textarea
            outlined
            label="Your Message"
            background-color="white"
            height="230px"
            single-line
            class="rounded-lg text-area"
          ></v-textarea>
          <v-row  align="center">
            <v-col cols="6" >
              <v-btn
                large
                class="px-10 white--text rounded-lg glow-on-hover "
                width="170"
                color="orange"
                >Hire Us</v-btn
              >
            </v-col>
            <v-col class="d-sm-flex justify-end align-center" cols="12" sm="6">
              <v-btn
                v-for="(icon, i) in items"
                :key="i"
                class="mx-1 white--text "
                icon
              >
                <v-icon size="28" :color="icon.color">{{ icon.icon }}</v-icon>
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
.glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f7600e;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
@media screen and (max-width: 600px) {
  .display-2 {
    font-size: 1.5rem !important;
  }
  .body-2 {
    font-size: 0.8rem !important;
  }
}
.text-field-left>>> .v-input__control{
color: #f7600e;
}

.text-field-left>>> .v-input__icon.v-input__icon--append i {
  font-size: 32px;
}
.text-field-right>>> .v-input__icon.v-input__icon--append i {
  font-size: 32px;
}
.text-field-right>>> .v-input__control{
color: #f7600e;
}
.text-area >>> .v-input__control{
  color: #f7600e;
}
</style>