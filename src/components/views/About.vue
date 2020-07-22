<template>
  <div>
    <v-img
      :src="require('@/assets/about.jpg')"
      :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
      gradient="to top, rgba(5, 11, 31, 0.8), rgba(5, 11, 31, 0.8)"
      flat
      max-width="100%"
      tile
    >
      <v-row
        align="center"
        class="ma-0 fill-height text-center"
        justify="center"
      >
        <v-col cols="12">
          <h1 class="secondary--text mb-4">ABOUT US</h1>
          <v-divider class="primary divider ma-auto"/>
        </v-col>
      </v-row>
    </v-img> 
    <v-container>
      <v-row style="min-height: 300px" >
        <v-col cols="12" sm="6">
        </v-col>
        <v-col cols="12" sm="6">
          <h1 class="text-center primary--text bottom30">About Us</h1>
          <p class="text-justify accent--text">MagTrak is marketed and distributed by <a href="http://adishwar.co.in/">Adishwar Telenetworks</a>. It is one of the leading manufacturer of precision locating equipments in India. Our product portfolio consist of various equipment which are used in building fiber optic cable networks. This consist of Fiber Jet – Fiber Optic Cable Blowing Machine, Fib Rod – Fiber Glass Duct Rodder used for cable pulling, HDPE duct accessories like Push Fit Couplers, Simplex Plugs, Manhole Bracket, End Plugs, etc.
    Apart from manufacturing we also undertake fiber optic cable installation work, provide turnkey solution along with maintenance. Adishwar Tele Networks have the experience of successfully installing more than 70,000 km of Fiber Optic Cable networks in Indian and Middle East.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
    name : 'About',
}
</script>
<style lang="scss" scoped>
.divider {
    max-width: 40px;
    border-width: 3px 0 0 0 !important
}
</style>