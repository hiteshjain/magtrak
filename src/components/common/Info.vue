<template>
  <v-theme-provider dark>
    <div
      id="info-alt"
      class="accent"
    >
      <v-responsive
        class="mx-auto"
        max-width="1400"
      >
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              md="3"
            >
              <div>
                <v-img
                    :src="require('@/assets/dark-logo.png')"
                    contain
                    max-width="128"
                    min-height="78"
                    width="100%"
                />

                <p style="color: white;">
                  Built with Magtrak SAF Technology at its core, the Magtrak Precision Locating System from Adishwar Tele-network is adeal for congested locates in crowded easements, long runs of pipe and cable as well as basic service drops. This simple, accurate and affordable locator is designed for those committed to protecting buried infrastructure.
                </p>

                <v-btn
                    class="mb-12"
                    color="white"
                    outlined
                >
                    More Info
                </v-btn>
                </div>
            </v-col>
            <v-col
              cols="12"
              md="3"
            >
              <div>
                <h3
                    style="color: white;"
                >
                  Contact
                </h3>

                <template v-for="({ icon, text, title: t }, i) in business">
                  <v-icon style="display:inline;" size="40" :key="i">{{icon}}</v-icon>
                  <v-card
                    :key="i"
                    :outlined="false"
                    color="transparent"
                    horizontal
                    space="0"
                    style="display: inline-flex; padding: 10px;"
                   >
                    <div v-html="text" />
                  </v-card>

                    <v-divider
                    v-if="i + 1 !== business.length"
                    :key="`divider-${i}`"
                    class="my-2"
                    />
                </template>
              </div>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
            <h3 style="color: white;">
              Products
            </h3>
              <a
                v-for="product in products"
                :key="product"
                :text="product"
                class="mb-8 body-1 d-block text-none"
                href="#"
                v-html="`&rsaquo; ${product}`"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </div>
  </v-theme-provider>
</template>
<script>
export default {
  name: 'info',
  data: () => ({
    business: [
      {
        icon: 'mdi-map-marker-outline',
        title: 'Address',
        text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
      },
      {
        icon: 'mdi-cellphone',
        title: 'Phone',
        text: '01 (800) 433 744<br>01 (800) 433 633',
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
      },
    ],
    products: [
      'MagTrak Locator',
      'Duct Rodder',
      'Traceable Rodder',
      'Sonde Locator'
    ],
  }),
}
</script>