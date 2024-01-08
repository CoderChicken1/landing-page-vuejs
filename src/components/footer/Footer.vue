<template>
  <v-footer height="100px" color="#3b434c">
    <v-row justify="space-between" align="center">
      <v-col cols="6" offset="1">
        <p class="body-1 text-uppercase white--text text-footer" >
          © 2015 Copyright Design Studio
        </p>
      </v-col>
      <v-col class="d-flex align-center justify-center" offset="1">
        <p class="body-1 text-uppercase white--text text-footer">Design by</p>
        <v-img
          src="@/assets/logo-footer.png"
          contain
          max-height="24"
          max-width="48"
        />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.text-footer {
  margin: 0 !important;
}
@media screen and (max-width: 600px) {
  .body-1 {
    font-size: 0.6rem !important;
  }
}
</style>