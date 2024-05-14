<template>
  <v-dialog
    v-model="localDialog"
    max-width="600px"
    persistent
    transition="scroll-x-transition"
  >
    <v-card class="py-8 form-moblie">
      <v-btn icon @click="closeDialog()" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="8">
          <h1 class="display-1 font-weight-bold mb-4 text-center">
            HIRE <span class="color-title">US</span>
          </h1>
          <p class="body-1 font-weight-regular text-center">
            Our dedicated support team is available around the clock to address
            any concerns or issues promptly, ensuring smooth operations for your
            business.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="ma-0">
        <v-col cols="10">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              label="Your Email"
              placeholder="Email"
              :rules="emailRules"
              outlined
              dense
              class="rounded-lg"
            ></v-text-field>
            <v-text-field
              v-model="subject"
              label="Subject"
              placeholder="Subject"
              :rules="subjectRules"
              outlined
              dense
              class="rounded-lg"
            ></v-text-field>
            <v-textarea
              v-model="message"
              label="YourMessage"
              placeholder="YourMessage"
              outlined
              single-line
              class="rounded-lg"
              auto-grow
            />
            <v-btn
              color="orange"
              :disabled="!valid"
              block
              class="white--text rounded-lg"
              @click="SubmitDialog()"
            >
              SEND MESSAGE
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogV",
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    subject: "",
    subjectRules: [
      (v) => !!v || "Subject is required",
      (v) => (v && v.length >= 10) || "Subject must be more than 10 characters",
    ],
    message: "",
  }),
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        (this.email = ""), (this.message = ""), (this.subject = "");
      }
    },
  },
  computed: {
    localDialog() {
      // if (this.dialog) return true;
      // else return false;
      return this.dialog;
    },
  },
  methods: {
    closeDialog() {
          // Reset the form data
    this.email = "";
    this.message = "";
    this.subject = "";

    // clear data required when turn off dialog
      
      this.$refs.form.resetValidation(); 
      this.$emit("close-dialog");
    },
    SubmitDialog() {
     if(this.$refs.form.validate()) {
      this.$emit("submit-dialog", {
        email: this.email,
        message: this.message,
        subject: this.subject,
      });
      this.closeDialog();  // clear data required when sent dialog
      this.$emit("close-dialog");
    }
    },
  },
};
</script>

<style scoped>
.color-title {
  color: #f7600e;
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
}
@media screen and (max-width: 600px) {
  .form-moblie {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}
</style>