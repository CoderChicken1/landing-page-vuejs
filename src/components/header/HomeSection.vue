<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bgHero.png" class="pt-15" height="auto">
      <v-row align="center" justify="center" class="mt-15">
        <v-col cols="12" sm="6">
          <h1 class="display-2 font-weight-bold mb-2 text-center">
            WE DESIGN 
            <span class="color-title">THINGS:</span> </h1>
            <h1 class="roller display-1 font-weight-bold">
    <span id="rolltext">PRINT<br/>
    LOGO<br/>
    APP<br/>
    WEB<br/></span>
    </h1>
          
          <h1 class="title font-weight-light text-justify">
            Welcome to Nifty, your gateway to innovative and impactful design
            solutions. Our passion lies in bringing creative visions to life,
            transforming ideas into visually stunning experiences. Our
            comprehensive design services cater to a diverse range of needs,
            from print to digital, ensuring a cohesive and memorable brand
            presence.<span v-if="readMore"></span>
            <span v-else>...</span>
          </h1>
           <v-slide-y-transition>
            <h1 class="title font-weight-light text-justify" v-show="readMore">
              At Nifty, we believe in the power of design to transform ideas
              into captivating visual experiences. Our dedicated team of skilled
              professionals combines technical expertise with artistic flair to
              bring your vision to life. Whether it's crafting stunning print
              materials, designing user-friendly websites and apps, or creating
              memorable logos, we are committed to delivering solutions that
              make a lasting impact.
            </h1>
           </v-slide-y-transition>
          <v-row justify="center" align="center" class="my-8">
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

          <v-dialog
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
          </v-dialog>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="my-4">
        <v-col cols="3" class="d-flex justify-center">
          <v-btn icon color="white" @click="readMore = !readMore">
            <v-icon size="34" v-if="readMore"
              >mdi-chevron-up-circle-outline</v-icon
            >
            <v-icon size="34" v-else>mdi-chevron-down-circle-outline</v-icon>
          </v-btn>
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
  watch: {
    dialog(val) {
      if (val) {
        (this.email = ""), (this.message = ""), (this.subject = "");
      }
    },
  },
};
</script>

<style scoped>
.roller{
  height: 4.125rem;
  line-height: 4rem;
  position: relative;
  overflow: hidden; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(235, 237, 245) ;
}


#spare-time{
  font-size: 1rem;
  font-style: italic;
  letter-spacing: 1rem;
  margin-top: 0;
  color: #A8DADC;
  
}

.roller #rolltext {
  position: absolute;
  top: 0;
  animation: slide 5s infinite;  
}

@keyframes slide {
  0%{
    top:0;
  }
  25%{
    top: -4rem;    
  }
  50%{
    top: -8rem;
  }
  72.5%{
    top: -12.25rem;
  }
}

@media screen and (max-width: 600px){
  h1{
  text-align:center;
  text-transform: uppercase;
  color: #F1FAEE; 
  font-size: 2.125rem;
}
  
  .roller{
  height: 2.6rem; 
  line-height: 2.125rem;  
  }
  
  #spare-time {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
  
  .roller #rolltext {  
  animation: slide-mob 5s infinite;  
}
  
  @keyframes slide-mob {
  0%{
    top:0;
  }
  25%{
    top: -2.125rem;    
  }
  50%{
    top: -4.25rem;
  }
  72.5%{
    top: -6.375rem;
  }
}
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
}*/
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  color: #555;
}
.v-text-field >>> .v-input__control {
  color: #f7600e ;
}
.v-text-field >>> .v-label >>>.v-label--active{
  color: #f7600e;
}

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