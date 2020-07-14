<template>
  <div>
    <v-tabs
      class="headerTabs"
      slider-color="primary"
      grow
      show-arrows='mobile'
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item.name"
        active-class="primary--text"
        class="font-weight-bold"
        
      >
        {{ item.name }}
      </v-tab>
      <v-tab-item
        v-for="(item,i) in items"
        :key="i"
      >
        <ProductContent :products="item"/>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import ProductContent from './ProductDescription'
export default {
    name:'Products',
    components:{
        ProductContent
    },
    data:()=>({
        items: [
          {
            name:'LOCATOR',
            description:"Magtrak Locator is ideal for congested locates in crowded easements, long runs of pipe and cable, as well as basic service drops. This simple, accurate and affordable locator is designed for those committed to protecting buried infrastructure.Users can now cantrl the transmitter's output power and frequncy right from the hand-held receiver, eliminating the back and forth walking between devices.",
            src:require('@/assets/products/locator_products.png'),
            manual_src:'./Magtrak.pdf',
            accessories:[
              {
                src:require('@/assets/accessories/locator/receiver.png'),
                accessory_name:'Magtrak Receiver'
              },
              {
                src:require('@/assets/accessories/locator/transmitter.png'),
                accessory_name:'Magtrak Transmitter'
              },
              {
                src:require('@/assets/accessories/locator/connection_cord.png'),
                accessory_name:'Direct Connection Rod'
              },
              {
                src:require('@/assets/accessories/locator/batteries.png'),
                accessory_name:'Batteries'
              },
              {
                src:require('@/assets/accessories/locator/ground_rod.png'),
                accessory_name:'Ground Rod'
              },
              {
                src:require('@/assets/accessories/locator/charger.png'),
                accessory_name:'AC & DC Battery Charger'
              },
              {
                src:require('@/assets/accessories/locator/protective_case.png'),
                accessory_name:'Protective carrying case'
              },
              {
                src:require('@/assets/accessories/locator/manual.png'),
                accessory_name:'Manual'
              },
            ],
            features:{
              img:require('@/assets/products/locator.jpg'),
              description:['8 Locating Modes','Automatic Impedance Matching Technology','High-Contrast LCD Interface with BackLight',
              'Constant Depth & Current Measurement','84 wH Lithium-Ion Batteries','2-year warrenty']
            },
            specifications:[
              {
                name:'Reciever Specification',
                data:[
                  {
                    icon:'mdi-waveform',
                    spec_name:'Available Operating Frequencies',
                    spec_description:'476.527 kHz*, 262 kHz*, 200.330 kHz*, 145 kHz, 131 Khz, 117.850 kHz, 116 kHz, 93 kHz, 83.00 kHz, 82.70 kHz, 82.315 kHz, 65.536 kHz, 33.0 kHz, 32.768 kHz, 9.2 kHz, 8.9 kHz,8.4 kHz/8.192 kHz, 4.010 kHz, 1.450 kHz,1.100 kHz, 1.020 kHz, 1.010 kHz, 940 Hz 920 Hz, 870 Hz, 815 Hz, 797 Hz, 760 Hz, 640 Hz, 577 Hz, 570 Hz, 512 Hz,273 Hz, 256 Hz, & 200 Hz'
                  },
                  {
                    icon:'mdi-video-input-antenna',
                    spec_name:'Antenna Mode',
                    spec_description:'Simultaneous peak/null (dual horizontal antennas & vertical antenna), pin-point peak (dual horizontal antennas), directional guidance, peak (single horizontal antenna) & null (single vertical antenna).'
                  },
                  {
                    icon:'mdi-clock-digital',
                    spec_name:'Display Indicators',
                    spec_description:'Backlit segmented LCD bar graph,battery condition, continuous mode signal strength, depth measurement,line orientation, left/right line guidance, operating mode, volume level &function indicators'
                  },              
                  {
                    icon:'mdi-chart-sankey',
                    spec_name:'Depth Measurement',
                    spec_description:"3 digit LCD readout of push-button measurement (1 inch - 30 feet) (.02m-10.6m) with accuracy > 5% of depth. MANUAL: 45' triangulation method"
                  },
                  {
                    icon:'mdi-arrow-all',
                    spec_name:'Gain Control',
                    spec_description:'Left / Right Guidance Mode:Automatic All other locate modes:Manual gain adjustment Sc automatic centering'
                  },
                  {
                    icon:'mdi-battery-charging ',
                    spec_name:'Battery Life',
                    spec_description:'Continuous:30 hours intermittent: 82 hours'
                  },
                  {
                    icon:'mdi-wifi',
                    spec_name:'Signal Strength',
                    spec_description:'LCD bar graph, absolute signal strength 0-999'
                  },
                  {
                    icon:'mdi-power-plug ',
                    spec_name:'Power Source',
                    spec_description:'6"C" cell batteries or Lithium Ion'
                  },
                  {
                    icon:'mdi-thermometer-lines ',
                    spec_name:'Operating Temperature',
                    spec_description:'-4° F to +133° F (-20° C to +55° C)'
                  },
                  {
                    icon:'mdi-weight-kilogram',
                    spec_name:'Weight',
                    spec_description:'Rechargeable: 4.2 lbs (1.9 kg);C-cell: 4.2 lbs (1.9 kg)'
                  },
                  {
                    icon:'mdi-volume-high',
                    spec_name:'Audio Indication',
                    spec_description:'Variable pitch & LiveSound. 4 volume selections including mute.'
                  },
                  {
                    icon:'mdi-axis-arrow',
                    spec_name:'Dimensions',
                    spec_description:'30.3" x 9.4" (77 cm x 24 cm)'
                  },
                  {
                    icon:'mdi-valve-closed',
                    spec_name:'Current Measurement',
                    spec_description:'Display indicates relative current'
                  },
                  {
                    icon:'mdi-sine-wave',
                    spec_name:'Dynamic Range',
                    spec_description:'126 DB'
                  },
                  {
                    icon:'',
                    spec_name:'Ingress Protection Rating',
                    spec_description:'Ip 65'
                  },
                ]
              },
              {
                name:'Transimitter Specification',
                data:[
                  {
                    icon:'mdi-waveform',
                    spec_name:'Available Operating Frequencies',
                    spec_description:'476.527 kHz*, 262 kHz*, 200.330 kHz*, 145 kHz, 131 Khz, 117.850 kHz, 116 kHz 93 kHz, 83.00kHz, 82.70kHz, 82.315 kHz, 65.536 kHz, 33.0 kHz, 32.768 kHz, 9.2 kHz, 8.9 kHz,8.4 kHz/8.192 kHz, 4.010 kHz, 1.450 kHz, 1.100 kHz, 1.020 kHz, 1.010 kHz, 940Hz 920 Hz, 870 Hz, 815 Hz, 797 Hz, 760Hz, 640 Hz, 577 Hz, 570 Hz, 512 Hz, 273 Hz,256 Hz,&200 Hz'
                  },
                  {
                    icon:'mdi-seal',
                    spec_name:'Warranty',
                    spec_description:'24 Months Warranty when registered at http://www.adishwar.iniextended.html within 1 month of date of purchase. Warranty from date of delivery against defects in material and workmanship (EXCEPT BATTERIES) on all instruments. This warranty is void if, after having received the instrument in good condition, it is subjected to abuse, unauthorized alteration or casual repair. We will repair or replace products that prove to be defective during warranty period.'
                  },
                  {
                    icon:'mdi-dots-horizontal ',
                    spec_name:'Indiactors',
                    spec_description:'AC load assistance measurement, relative ohms, voltage, live voltage output, current output, power level, frequency, mode, battery indication alert, low battery indicator audio/visual with modulated low battery warning transmitted to receiver'
                  },
                  {
                    icon:'mdi-power-plug',
                    spec_name:'Power Source',
                    spec_description:'Rechargeable: 10.8 V, 10 amp-hour maintenance free Lithium Ion Battery Non-Rechargeable: 12 "D" cell batteries'
                  },
                  {
                    icon:'mdi-power-plug-outline',
                    spec_name:'Output Power',
                    spec_description:'10 power settings Low & Medium Frequency Range: 0.2w to I Ow High Frequencies (above 44kHz) : 0.2 to 1w'
                  },
                  {
                    icon:'mdi-battery-charging',
                    spec_name:'Battery Life',
                    spec_description:'Continuous: 8-20 hours (dependant on load, frequency, power setting) intermittent: 40-60 hours'
                  },
                  {
                    icon:'mdi-weight-kilogram',
                    spec_name:'Weight',
                    spec_description:'Rechargeable: 6 ibs (2.7 kg); D-cell: lbs (3.6 kg)'
                  },
                  {
                    icon:'mdi-axis-arrow',
                    spec_name:'Dimensions',
                    spec_description:'16" x 6.32" x 6" (41 cm x 16 cm x 15cm)'
                  },
                  {
                    icon:'mdi-flash',
                    spec_name:'Load Matching',
                    spec_description:'Automatic from 5 ohms to 25,000 Q'
                  },
                  {
                    icon:'mdi-thermometer-lines',
                    spec_name:'Operating Temperature',
                    spec_description:'30.3" x 9.4" (77 cm x 24 cm)'
                  },
                ]
              }
            ]
          },
          {
            name:'DUCT-RODDER',
            description:'Duct Rodder helps in tracing of already layed underground duct and clearing blockages. FibRod - Traceable Duct Rodder also helps in analyzing the depth of duct and its path. It is most ideal equipment to use when duct path is unknown, duct is blocked or trench is old.',
            src:require('@/assets/products/duct-rodder_products.jpg'),
            manual_src:'./Magtrak.pdf',  
            features:{
              img:require('@/assets/products/locator.jpg'),
              description:['8 Locating Modes','Automatic Impedance Matching Technology','High-Contrast LCD Interface with BackLight',
              'Constant Depth & Current Measurement','84 wH Lithium-Ion Batteries','2-year warrenty']
            },
            specifications:[
              {
                name:'Duct-Rodder Specifications',
                data:[
                  {
                    icon:'mdi-sine-wave',
                    spec_name:'Dynamic Range',
                    spec_description:'126 DB'
                  }
                ]
              }
            ]
          },
          {
            name:'SONDE',
            description:'Sondes are used to trace the path of non-metallic pipes and locate line blockages.Rugged design with potted components in an impact resistant compound.Threaded end caps for attaching to push rods.Operates over 4 hours on one AAA battery.Multiple frequencies designed to work with all Rycom locators.Made in the U.S.A.',
            src:require('@/assets/products/MidSonde_products.png'),
            manual_src:'./Magtrak.pdf',
            features:{
              img:require('@/assets/products/locator.jpg'),
              description:['8 Locating Modes','Automatic Impedance Matching Technology','High-Contrast LCD Interface with BackLight',
              'Constant Depth & Current Measurement','84 wH Lithium-Ion Batteries','2-year warrenty']
            },
            specifications:[
              {
                name:'Sonde Specifications',
                data:[
                  {
                    icon:'mdi-sine-wave',
                    spec_name:'Dynamic Range',
                    spec_description:'126 DB'
                  }
                ]
              }
            ]
          },        
        ]
    })
}
</script>
<style lang="scss" scoped>
.headerTabs > .v-tabs-bar .v-tab:not(.v-tab--active){
  color:#424242
}
</style>