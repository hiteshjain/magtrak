<template>
  <div>
    <v-tabs
      class="headerTabs"
      slider-color="primary"
      grow
      show-arrows
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
        <ProductContent :products="item" />
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
            description:'locator descp here',
            src:require('@/assets/locator_products.png')
          },
          {
            name:'DUCT-RODDER',
            description:'Duct Rodder helps in tracing of already layed underground duct and clearing blockages. FibRod - Traceable Duct Rodder also helps in analyzing the depth of duct and its path. It is most ideal equipment to use when duct path is unknown, duct is blocked or trench is old.',
            src:require('@/assets/duct-rodder_products.jpg'),  
          },
          {
            name:'SONDE',
            description:'Sondes are used to trace the path of non-metallic pipes and locate line blockages.Rugged design with potted components in an impact resistant compound.Threaded end caps for attaching to push rods.Operates over 4 hours on one AAA battery.Multiple frequencies designed to work with all Rycom locators.Made in the U.S.A.',
            src:require('@/assets/MidSonde_products.png')
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