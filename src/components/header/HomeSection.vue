<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bgHero.png" class="py-15" height="auto" >
      <v-row align="center" justify="center" class="my-15">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4 text-center">
                WE DESIGN <span class="color-title">THINGS</span>
              </h1>
              <h1 class="font-weight-light text-justify">
                Welcome to Nifty, your gateway to innovative and impactful
                design solutions. Our passion lies in bringing creative visions
                to life, transforming ideas into visually stunning experiences.
                Our comprehensive design services cater to a diverse range of
                needs, from print to digital, ensuring a cohesive and memorable
                brand presence.<span v-if="readMore"></span>
                <span v-else>...</span>
              </h1>
              <h1  class="font-weight-light text-justify" v-show="readMore">
                At Nifty, we believe in the power of design to
                transform ideas into captivating visual experiences. Our
                dedicated team of skilled professionals combines technical
                expertise with artistic flair to bring your vision to life.
                Whether it's crafting stunning print materials, designing
                user-friendly websites and apps, or creating memorable logos, we
                are committed to delivering solutions that make a lasting
                impact.
              </h1>
              <div class="d-flex justify-center align-center">
                <v-dialog v-model="dialog" width="600px" scrollable>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      large
                      class="rounded-lg mx-2 my-8 px-10 white--text button-home"
                      width="170"
                      color="transparent"
                      depressed
                      v-bind="attrs"
                      v-on="on"
                      >Hire Us</v-btn
                    >
                  </template>
                  <v-container class="dialog-home">
                    <v-btn icon @click="dialog = false" class="close-btn">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <div class="py-2">
                      <h1 class="d-title font-weight-bold mb-4 text-center">
                        HIRE <span class="color-title">US</span>
                      </h1>
                      <p class="font-weight-regular text-center">
                        IT Outsourcing Company in Vietnam specialized in
                        delivering tailor-made it solutions helping businesses
                        in BFSI, Healthcare,
                      </p>
                    </div>
                    <v-form v-model="hire">
                      <v-text-field
                        v-model="email"
                        label="Your Email"
                        outlined
                        class="rounded-lg"
                      ></v-text-field>

                      <v-text-field
                        v-model="subject"
                        label="Subject"
                        outlined
                        class="rounded-lg"
                      ></v-text-field>

                      <v-textarea
                        v-model="message"
                        label="YourMessage"
                        outlined
                        class="rounded-lg"
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
                  </v-container>
                </v-dialog>
                <v-btn
                  large
                  class="mx-2 my-8 px-10 white--text button-home rounded-lg"
                  width="170"
                  color="transparent"
                  depressed
                  v-bind="attrs"
                  v-on="on"
                  >Our Works</v-btn
                >
              </div>
              <v-row align="center" justify="center">
                <v-col cols="3" class="d-flex justify-center">
                  <v-btn icon color="white" @click="readMore =! readMore">
                    <v-icon size="32" v-if="readMore"
                      >mdi-arrow-up-drop-circle-outline</v-icon
                    >
                      <v-icon size="32" v-else
                      >mdi-arrow-down-drop-circle-outline</v-icon
                    >
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "HomeSection",
  data: () => ({
    dialog: false,
    readMore: false,
    hire: "",
    email: "",
    message: "",
    subject: "",
  }),
};
</script>

<style scoped>
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
.dialog-home {
  position: relative;
  background: white;
  padding: 50px 80px;
}
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  color: #555; /* Màu của biểu tượng đóng */
}
</style>