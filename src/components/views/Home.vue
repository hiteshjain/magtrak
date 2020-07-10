<template>
  <div>
    <v-carousel
      cycle
      class="carouselDiv"
      hide-delimiter-background
      show-arrows-on-hover
      >
      <v-carousel-item
        v-for="(data,i) in carouselData"
        :key="i"
        :src="data.src"
        class="carousalItems"
      >
        <v-container class="carouselText">
          <v-row class="is-custom-padding">
              <v-col cols="7" md="8"></v-col>
              <v-col cols="5" md="4">
                <h2 class="primary--text">{{data.text[0]}}</h2>
                <span class="carouselTextSpan1 font-20"><v-icon color="accent">mdi-check-bold</v-icon>{{data.text[1]}}</span>
                <span class="carouselTextSpan2 font-20"><v-icon color="accent">mdi-check-bold</v-icon>{{data.text[2]}}</span>
                <span class="carouselTextSpan3 font-20"><v-icon color="accent">mdi-check-bold</v-icon>{{data.text[3]}}</span>
                <v-btn rounded class="mt-4" @click.stop="viewProducts(data.url)">View More</v-btn>
              </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-progress-linear :value="number" absolute bottom color="primary"></v-progress-linear>
    </v-carousel>
    <v-carousel
      cycle
      height="100"
      hide-delimiter-background
      :show-arrows="false"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(slide, i) in textSlides"
        :key="i"
      >
        <v-card
          height="100%"
          color="accent"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <h3 class="ml-4 slideText">{{ slide.text }}</h3>
            <div v-if="slide.src"> 
              <v-avatar tile size="72" class="ml-5">
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
    <div class="mt-6">
      <v-container class="fill-height text-center">
        <v-row class="mx-auto">
          <v-col cols="12" sm="4">
            <h1>{{countries}}+</h1>
            <h3>Countries Covered</h3>
          </v-col>
          <v-col cols="12" sm="4">
            <h1>{{clients}}</h1>
            <h3>Happy Client</h3>
          </v-col>
          <v-col cols="12" sm="4">
            <h1>{{viewers}}+</h1>
            <h3>No of Viewers</h3>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="process mt-15 accent pt-10">
      <h1 class="secondary--text">PROCESS</h1>
      <v-container class="text-center">
        <v-row style="min-height: 360px">
          <v-col 
            v-for="(steps, i) in process"
            :key="i"
            cols="12"
            sm="4"
          >
            <v-avatar size="240" class="processText">
              <img
              :src="steps.src"
              alt=""
            >
            </v-avatar>
            <div>
              <h3 class="mx-15 pt-10 secondary--text">{{steps.title}} </h3>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="features mt-15">
      <h1>PRODUCT FEATURES</h1>
      <v-container class="text-center">
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
let countryInterval,clientInterval,viewerInterval;
export default {
  name:'Home',
  data:()=>({
    countries:0,
    clients:0,
    width:window.screen.width,
    check:true,
    viewers:0,
    number: 16.6,
    loading: true,
    carouselData: [
      {
        src: require('../../assets/duct-rodder.jpg'),
        text:['Duct Rodder','Accurate Dimension','Solid Frame','Traceable'],
        url:'products'
      },
      {
        src: require('../../assets/locator.png'),
        text:['Locator','8 locating Modes','Automatic Impedence','High-Contrast LCD Interface'],
        url:'products'
      },
      {
        src:require('@/assets/MidSonde.png'),
        text:['Sonde','Exceptional cast iron penetration','Rugged design','Multiple frequencies designed'],
        url:'products'
      }
    ],
    textSlides:[
      {text:'Over 1 Lakh Pieces'},
      {text:'More than 100+ Happy Customers'},
      {text:'Make in India Initiative',src:require('../../assets/make-in-India.png')}
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
    ],
    process:[
      {
        src:require('@/assets/duct_rodder.png'),
        title:'Track'
      },
      {
        src:require('@/assets/locator.png'),
        title:'Survey'
      },
      {
        src:require('@/assets/MidSonde.png'),
        title:'Locate'
      }
    ],
  }),
  watch:{
    number(val){
      if(val > 100){
        this.number=16.6;
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted(){
    this.startBuffer()
    clientInterval = setInterval(() => {
      this.clients++;
    }, 600);
    countryInterval = setInterval(() => {
      this.countries++
    }, 400);
    viewerInterval = setInterval(() => {
      this.viewers++
    }, 50);
  },
  
  updated(){
    if(this.clients===15) {
      clearInterval(clientInterval)
    }
    if(this.countries===20) {
      clearInterval(countryInterval)
    }
    if(this.viewers===1000) {
      clearInterval(viewerInterval)
    }
  },
  methods:{
    viewProducts(path){
      this.$router.push(path)
    },
    startBuffer () {
      this.interval = setInterval(()=>{
          this.number += 16.6
        },1000)
    },
  },
}
</script>

<style scoped lang="scss">
.carouselDiv {
  background-image:url('../../assets/back-image1.jpg');
  background-size: cover;
}
.carouselText {
  span{
    display: block;
  }
  h2{
    text-transform: uppercase;
    animation: text1 1.5s 1;
  }
  button{
    &:hover{
      color: #42A5F5;
      transition: 0.5s;
      border: 1px solid;
    }
  }
}
.carouselTextSpan1{
  animation: text1 2s 1
}
.carouselTextSpan2{
  animation: text1 2.5s 1
}
.carouselTextSpan3{
  animation: text1 3s 1
}
@keyframes text1{
	0% {
		margin-bottom: -500px;
	}
	30% {
		margin-bottom: -500px;
	}
	85% {
		margin-bottom: -500px;
	}
}
.carouselItems {
  animation: carouselImage 10s 1;
}
@keyframes carouselImage {
  0%{
    margin-left: -100px;;
  }
}
.features, .process {
	h1 {
		text-align: center;
	}
}
.featureImages {
	background-color: #4242;
	box-shadow: 5px 5px 5px 5px #424242;
}
.featureText {
	&:hover {
		background-color: #424242;
		color: white;
		transition: 1.5s;
	}
	padding: 16px 10px;
	text-transform: uppercase;
}
.slideText, .process h3{
	text-transform: uppercase;
}
.processText{
  border: solid white 3px;
  color:white;
  background-color: white;
  &:hover {
    height: 252px!important;
    min-width: 252px!important;
    width: 252px!important;
    border-color: #42A5F5;
  }
}
</style>