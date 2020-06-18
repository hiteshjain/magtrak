<template>
  <div>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      >
      <v-carousel-item
        v-for="(image,i) in images"
        :key="i"
        :src="image.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-carousel
      cycle
      height="100"
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(slide, i) in textSlides"
        :key="i"
      >
        <v-card
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          
            <div class="display-2">{{ slide.text }}</div>
            <div v-if="slide.src"> 
              <v-avatar tile size="62" class="ml-4">
                 <img
                    :src="slide.src"
                    alt=""
                >
              </v-avatar>
            </div>
          
          </v-row>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
    name:'Home',
    data:()=>({
        images: [
          {
            src: require('../../assets/duct-rooder-conduit-workers.jpg'),
          },
          {
            src: require('../../assets/frp-duct-rodder-details.jpg'),
          },
        ],
        textSlides:[
          {text:'Over 1 Lakh Pieces'},
          {text:'More than 100+ Happy Customers'},
          {text:'Make in India Initiative',src:require('../../assets/make-in-india-logo.jpg')}          
        ],
    })
}
</script>
<style scoped>
.imageCarousel{
  max-width: 400px;
  height: auto;
}
</style>