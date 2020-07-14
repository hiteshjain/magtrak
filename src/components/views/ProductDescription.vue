<template>
  <div>
    <v-container>
      <v-row style="min-height: 300px" >
        <v-col cols="12" sm="6">
          <v-img
            :alt="products.name"
            :src="products.src"
            contain
          />
        </v-col>
        <v-col cols="12" sm="6">
          <h1 class="text-center primary--text bottom30">{{products.name}}
          <v-icon color="primary" large @click="downloadFile(products.manual_src)" title="Download Manual">mdi-arrow-down-circle</v-icon></h1>
          <p class="text-justify accent--text">{{products.description}}</p>
        </v-col>
      </v-row>
    </v-container>
    <div class="mb-15">
      <h1 class="bottom30">ACCESSORIES</h1>
      <v-container>
        <v-row>
          <v-col cols="4" sm="3" v-for="(product,i) in products.accessories" :key="i">
            <v-img :src="product.src"></v-img>
            <p class="text-center">{{product.accessory_name}}</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="mb-15">
      <h1 class="bottom30">Features</h1>
      <div class="container">
        <v-row>
          <v-col>
              <v-img :src="products.features.img" height="400" contain></v-img>
          </v-col>
          <v-col>
            <v-list>
              <v-list-item v-for="(feature,i) in products.features.description" :key="i">
                <v-list-item-content>
                  <h3><v-icon color="primary">mdi-circle-medium</v-icon>{{feature}}</h3>
                  <v-divider/>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </div>
    </div>
    <div>
      <v-container class="specifications">
          <v-expansion-panels accordion focusable>
            <h1 class="mb-6">Technical Specs</h1>
            <v-expansion-panel v-for="specs in products.specifications" :key="specs.icon">
              <v-expansion-panel-header>
                <h3>{{specs.name}}</h3>
              </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="12" sm="4" class="px-6" v-for="spec in specs.data" :key="spec.icon">
                  <div class="d-flex">
                    <v-icon large class="d-flex" color="primary">{{spec.icon}}</v-icon>
                    <h4 class="mt-2 ml-3">{{spec.spec_name}}</h4>
                  </div>
                  <p class="text-justify pt-3">{{spec.spec_description}}</p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
      </v-container>
    </div>
  </div> 
</template>
<script>

export default {
    props: {
      products: {
        type: Object,
        default: () => ({}),
      },
    },
    methods:{
      downloadFile(file){
        var downloadPdf = document.createElement('a');
        downloadPdf.href = file;
        downloadPdf.target = '_blank';
        downloadPdf.click();
        downloadPdf.download = this.products.name + '-manual.pdf';
        downloadPdf.click();
      }
    }
}
</script>
<style lang="scss" scoped>
.descpCol{
  display: flex;
  justify-content: flex-end;
}

  h1, .specifications h3{
  text-align: center;
  text-transform: uppercase;
  color: #424242;
  }


</style>