<template>
  <!-- <v-container class="pa-0 fill-height"> -->
  <section id="hero">
    <v-container class="pt-15 content-hero">
      <v-row align="center" justify="center" class="mt-15">
        <v-col cols="12" sm="8">
          <h1 class="display-2 font-weight-bold mb-2 text-center white--text">
            WE DESIGN
            <span class="color-title">THINGS</span>
          </h1>
          <h1 class="title font-weight-light text-center white--text">
            Welcome to Nifty, your gateway to innovative and impactful design
            solutions. Our passion lies in bringing creative visions to life,
            transforming ideas into visually stunning experiences. Our
            comprehensive design services to range of needs<span
              v-if="readMore"
            ></span>
            <span v-else>...</span>
          </h1>
          <v-slide-y-transition>
            <h1
              class="title font-weight-light text-center white--text"
              v-show="readMore"
            >
              From print to digital, ensuring a cohesive and memorable brand
              presence. At Nifty, we believe in the power of design to transform
              ideas into captivating visual experiences. Our dedicated team of
              skilled professionals combines technical expertise with artistic
              flair to bring your vision to life. Whether it's crafting stunning
              print materials, designing user-friendly websites and apps, or
              creating memorable logos, we are committed to delivering solutions
              that make a lasting impact.
            </h1>
          </v-slide-y-transition>
          <v-row justify="center" align="center" class="py-8">
            <v-col cols="3" sm="6" class="d-flex justify-end">
              <v-btn
                large
                class="rounded-lg white--text button-home"
                width="170"
                color="transparent"
                depressed
                @click="dialog = true"
                >Hire Us</v-btn
              >
            </v-col>
            <v-col cols="3" sm="6" class="d-flex justify-start">
              <v-btn
                large
                class="white--text button-home rounded-lg"
                width="170"
                color="transparent"
                depressed
                @click="$vuetify.goTo('#ourworks')"
                >Our Works</v-btn
              >
            </v-col>
          </v-row>
          <DialogV
            :dialog="dialog"
            @close-dialog="dialog = false"
            @submit-dialog="SubmitDialog"
          />
          <SnackBar
            bottom
            :color="color"
            outlined
            :content="text"
            :snackbar="snackbar"
            @close-snackbar="closeSnackbar"
          />
          <!-- <v-dialog
            v-model="dialog"
            max-width="600px"
            persistent
            transition="scroll-x-transition"
          >
            <v-card class="py-8 form-moblie">
              <v-btn icon @click="dialog = false" class="close-btn">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-row align="center" justify="center" class="ma-0">
                <v-col cols="8">
                  <h1 class="display-1 font-weight-bold mb-4 text-center">
                    HIRE <span class="color-title">US</span>
                  </h1>
                  <p class="body-1 font-weight-regular text-justify">
                    Our dedicated support team is available around the clock to
                    address any concerns or issues promptly, ensuring smooth
                    operations for your business.
                  </p>
                </v-col>
              </v-row>
              <v-row justify="center" align="center" class="ma-0">
                <v-col cols="10">
                  <v-form v-model="hire">
                    <v-text-field
                      v-model="email"
                      label="Your Email"
                      outlined
                      dense
                      single-line
                      class="rounded-lg"
                    ></v-text-field>
                    <v-text-field
                      v-model="subject"
                      label="Subject"
                      outlined
                      dense
                      single-line
                      class="rounded-lg"
                    ></v-text-field>
                    <v-textarea
                      v-model="message"
                      label="YourMessage"
                      outlined
                      single-line
                      class="rounded-lg"
                      row-height="60"
                    />
                    <v-btn
                      color="orange"
                      block
                      class="white--text rounded-lg"
                      @click="dialog = false"
                    >
                      SEND MESSAGE
                    </v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-dialog> -->
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="py-2">
        <v-col cols="3" class="d-flex justify-center">
          <v-btn icon color="white" @click="readMore = !readMore">
            <v-icon size="34" v-if="readMore"
              >mdi-chevron-up-circle-outline</v-icon
            >
            <v-icon size="34" v-else>mdi-chevron-down-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- </v-container> -->
</template>

<script>
import SnackBar from "../newletter/SnackbarV.vue";
import DialogV from "./DialogV.vue";
export default {
  name: "HomeSection",
  components: {
    DialogV,
    SnackBar,
  },
  data: () => ({
    dialog: false,
    readMore: false,
    snackbar: false,
    color: "success",
    text: " ",
  }),
  watch: {},
  methods: {
    SubmitDialog({ email, message, subject }) {
      this.text = `Thank you ${email} for choosing us. We look forward to being a part of
    your success journey. Best regards, The Nifty Team`;
      console.log("Subject:", subject);
      console.log("Message:", message);
      this.snackbar = true;
    },
    closeSnackbar(val) {
      this.snackbar = val;
      this.text=" ";
    },
  },
};
</script>

<style scoped>
#hero {
  background-image: url("~@/assets/bgHero.png");
  object-fit: fill;
  position: relative;
}
#hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(59, 67, 76, 0.9);
}
.hero-bg {
  position: relative;
}
.content-hero {
  position: relative;
}
.color-title {
  color: #f7600e;
}
.button-home {
  border: 1px solid rgb(92, 89, 89) !important;
}
.button-home:hover {
  background: #f7600e !important;
  color: white !important;
}
/*.dialog-home {
  position: relative;
  background: white;
  width: auto;
}
 .close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  color: #555;
}
.v-text-field >>> .v-input__control {
  color: #f7600e;
}
.v-text-field >>> .v-label >>> .v-label--active {
  color: #f7600e;
} */

@media screen and (max-width: 600px) {
  .display-2 {
    font-size: 2rem !important;
  }
  .display-1 {
    font-size: 1.5rem !important;
  }

  .title {
    font-size: 0.8rem !important;
  }
  .body-1 {
    font-size: 0.8rem !important;
  }
  .form-moblie {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}
</style>