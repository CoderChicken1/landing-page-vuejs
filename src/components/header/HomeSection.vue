<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bgHero.png" class="py-15" height="auto">
      <v-row align="center" justify="center" class="mt-15">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4 text-center">
                WE DESIGN <span class="color-title">THINGS</span>
              </h1>
              <h1 class="title font-weight-light text-justify">
                Welcome to Nifty, your gateway to innovative and impactful
                design solutions. Our passion lies in bringing creative visions
                to life, transforming ideas into visually stunning experiences.
                Our comprehensive design services cater to a diverse range of
                needs, from print to digital, ensuring a cohesive and memorable
                brand presence.<span v-if="readMore"></span>
                <span v-else>...</span>
              </h1>
              <h1
                class="title font-weight-light text-justify"
                v-show="readMore"
              >
                At Nifty, we believe in the power of design to transform ideas
                into captivating visual experiences. Our dedicated team of
                skilled professionals combines technical expertise with artistic
                flair to bring your vision to life. Whether it's crafting
                stunning print materials, designing user-friendly websites and
                apps, or creating memorable logos, we are committed to
                delivering solutions that make a lasting impact.
              </h1>
              <div class="d-flex justify-center align-center mb-10">
                    <v-btn
                      large
                      class="rounded-lg mx-2 my-8 px-10 white--text button-home"
                      width="170"
                      color="transparent"
                      depressed
                    @click="dialog=true"
                      >Hire Us</v-btn
                    >
                    <v-btn
                  large
                  class="mx-2 my-8 px-10 white--text button-home rounded-lg"
                  width="170"
                  color="transparent"
                  depressed
                  >Our Works</v-btn
                >
           </div>
                 <v-dialog v-model="dialog"  max-width="600px">
                  <v-card class="py-8">
                    <v-btn icon @click="dialog = false" class="close-btn">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                      <v-row align="center" justify="center" class="ma-0">
                      <v-col cols="8">
                       <h1 class="display-1 font-weight-bold mb-4 text-center">
                        HIRE <span class="color-title">US</span>
                      </h1>
                      <p class="body-1 font-weight-regular text-center">
                        Our dedicated support team is available around the clock
                        to address any concerns or issues promptly, ensuring
                        smooth operations for your business.
                      </p>
                      </v-col>
                      </v-row>
                    <v-row justify="center" align="center" class="ma-0">
                      <v-col cols="10">
                        <v-row align="center">
                          <v-col cols="12">
                            <v-form v-model="hire">
                              <v-text-field
                                v-model="email"
                                label="Your Email"
                                outlined
                                dense
                                class="rounded-lg"
                              ></v-text-field>
                              <v-text-field
                                v-model="subject"
                                label="Subject"
                                outlined
                                dense
                                class="rounded-lg"
                              ></v-text-field>
                              <v-textarea
                                v-model="message"
                                label="YourMessage"
                                outlined
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
                      </v-col>
                    </v-row>
                  </v-card>
                </v-dialog>
                
          
              <v-row align="center" justify="center">
                <v-col cols="3" class="d-flex justify-center">
                  <v-btn icon color="white" @click="readMore = !readMore">
                    <v-icon size="34" v-if="readMore"
                      >mdi-chevron-up-circle-outline</v-icon
                    >
                    <v-icon size="34" v-else
                      >mdi-chevron-down-circle-outline</v-icon
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
/*.dialog-home {
  position: relative;
  background: white;
  width: auto;
}*/
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  color: #555; 
}
@media screen and (max-width: 600px) {
  .display-2 {
    font-size: 2rem !important;
  }
  .display-1{
    font-size: 1.5rem !important;
  }
  
  .title {
    font-size: 0.8rem !important;
  }
  .body-1{
    font-size: 0.8rem !important;
  }
}
</style>