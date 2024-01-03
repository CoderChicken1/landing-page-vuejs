<template>
  <section id="hero">
    <v-parallax dark src="@/assets/bgHero.png">
      <v-row align="center" justify="center" class="my-15">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4 text-center">
                WE DESIGN <span class="color-title">THINGS</span>
              </h1>
              <h1 class="font-weight-light text-justify">
                IT Outsourcing Company in Vietnam specialized in delivering
                tailor-made it solutions helping businesses in BFSI, Healthcare,
                E-commerce and other sectors to cut costs and concentrate on
                their core operations. Our expertise supports Enterprises and
                SMEs in harnessing technology for growth and efficiency.
              </h1>
              <div class="d-flex justify-center align-center">
                <v-dialog v-model="dialog" width="600px" scrollable>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      large
                      class="mx-2 mt-8 px-10 white--text button-home"
                      width="170"
                      color="#f7600e"
                      depressed
                      v-bind="attrs"
                      v-on="on"
                      >Hire Us</v-btn
                    >
                    <v-btn
                      large
                      class="mx-2 mt-8 px-10 white--text button-home"
                      width="170"
                      color="transparent"
                      depressed
                      v-bind="attrs"
                      v-on="on"
                      >Our Works</v-btn
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
                      ></v-text-field>

                      <v-text-field
                        v-model="subject"
                        label="Subject"
                        outlined
                      ></v-text-field>

                      <v-textarea
                        v-model="message"
                        label="YourMessage"
                        outlined
                      />

                      <v-btn
                        color="orange"
                        block
                        class="white--text"
                        @click="dialog = false"
                      >
                        SEND MESSAGE
                      </v-btn>
                    </v-form>
                  </v-container>
                </v-dialog>
              </div>
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
  border: 1px solid rgb(14, 13, 13) !important;
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