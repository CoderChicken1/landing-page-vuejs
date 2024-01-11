<template>
  <v-footer height="100px" color="#3b434c">
    <v-row justify="space-between" align="center">
      <v-col cols="6" offset="1">
        <p class="body-1 text-uppercase white--text text-footer text-shadow">
          © 2015 Copyright Design Studio
        </p>
      </v-col>
      <v-col class="d-flex align-center justify-center" offset="1">
        <p class="body-1 text-uppercase white--text text-footer text-shadow">
          Design by symu<span class="circle">.</span>co
        </p>
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
.circle{
  color: red
}
.text-shadow {
	text-transform: uppercase;
	color: transparent;
	-webkit-text-stroke: #fff;
	-webkit-text-stroke-width: 1px;
	text-shadow: 2px 2px 10px #2162b8;
	transition: all 0.5s ease-in-out;
	animation: flicker 0.5s ease-in-out infinite alternate;

}
.text-shadow:hover {
  color: #fff;
}
@keyframes flicker {
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px var(--#2162b8);
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px var(--#2162b8);
  }
}
@media screen and (max-width: 600px) {
  .body-1 {
    font-size: 0.6rem !important;
  }
}
</style>