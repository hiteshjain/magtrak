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
      class="mt-6"
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
          color="#ffffff"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <h3 class="ml-4 primary--text slideText">{{ slide.text }}</h3>
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
    <div class="videoDiv mt-6">
      <video ref="videoRef" 
        :src='require("@/assets/Sample.mp4")' 
        autoplay muted loop 
        width="100%"> 
      </video>
      <div class="headerContent">
        <h3>WELCOME TO MAGTRAK</h3>
        <v-btn @click="play()" color="accent">
          <v-icon color="primary">mdi-play-box</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="features mt-15">
      <h1>PRODUCT FEATURES</h1>
      <v-container>
      <v-row>
        <v-col 
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          sm="6"
        >
          <v-avatar size="62" class="featureImages">
            <img
              :src="feature.src"
              alt=""
            >
          </v-avatar>
          <div>
            <h3 class="mx-15 featureText">{{feature.title}} </h3>
          </div>
        </v-col>
      </v-row>
     </v-container>
    </div>
  </div>
</template>
<script>
export default {
    name:'Home',
    data:()=>({
        isPlaying:true,
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
        features:[
          {
            src:require('@/assets/dimension.png'),
            title:'Accurate Dimension'
          },
          {
            src:require('@/assets/reliability.png'),
            title:'Solid Frame'
          },
          {
            src:require('@/assets/traceability.png'),
            title:'Traceable'
          },
          {
            src:require('@/assets/customize.png'),
            title:'Customisable'
          }
        ]
    }),
    methods:{
      play() {
        if(this.isPlaying) {
          this.$refs.videoRef.pause()
          this.isPlaying = false
        }
        else{
          this.$refs.videoRef.play()
          this.isPlaying = true
        }
      },
    }
}
</script>
<style scoped>
.videoText{
  text-align: center;
  margin-top:200px;
  color:white
}
.videoDiv{
  text-align: center;
  align-items: center;
  display: flex;
}
.container{
  text-align: center;
}
.headerContent{
  position: absolute;
  margin: 0 36%;
  color: white;
}
.features h1{
  text-align: center;
}
.featureImages{
  background-color: #4242;
  box-shadow: 5px 5px 5px 5px #424242
}
.featureText:hover{
  background-color: #424242;
  color: white;
  transition: 1.5s;
}
.featureText{
  padding:16px 10px;
  text-transform: uppercase;
}
.slideText{
  text-transform: uppercase;
}
</style>