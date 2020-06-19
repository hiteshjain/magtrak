<template>
  <div>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      height="auto"
      >
      <v-carousel-item
        v-for="(image,i) in images"
        :key="i"
        :src="image.src"
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
          color="white"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          
            <h3 class="ml-4 primary--text">{{ slide.text }}</h3>
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
    <div>
      <video-background 
        :src="require('../../assets/Sample.mp4')"
        poster="/images/mainfoto.jpg"
        style="max-height: 400px; height: 100vh;"
        overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" 
      >
        <h3 class="videoText font-weight-bold">WELCOME TO MAGTRAK!</h3>
      </video-background>
    </div>
  </div>
</template>
<script>
import VideoBackground from 'vue-responsive-video-background-player'
export default {
    name:'Home',
    components:{
      VideoBackground 
    },
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
.videoText{
  text-align: center;
  margin-top:200px;
  color:white
}
</style>