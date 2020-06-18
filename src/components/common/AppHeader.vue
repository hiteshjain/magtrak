<template>
  <div>
    <v-app-bar
      app
      color="white"
      elevation="1"
      height="80"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        color="primary"
        @click="drawer = !drawer"
      />
      <div class="imageDiv">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo.png')"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
        <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold primary--text"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            color="primary"
            v-bind="attrs"
            v-on="on"
          >mdi-information</v-icon>
        </template>
        <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="primary">mdi-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <a class = "accent--text" href="tel:+917778889000">{{phone}}</a>
          </v-list-item-content>
        </v-list-item>  
        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="primary">mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <a class = "accent--text" href="mailto:contactus@magtrak.com">contactus@magtrak.com</a>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-menu> 
    </v-app-bar>
    <NavigationDrawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>
<script>
import NavigationDrawer from './NavigationDrawer'
export default {
    name:'AppHeader',
    components:{
        NavigationDrawer
    },
    data:() =>({
        dialog: false,
        phone:+917778889000,
        drawer:false,
        items: [
        'Home',
        'About',
        'Products',
        'Contact',
      ],
    }),
    methods:{
      dial: function(number){
        window.location ='tel:'+number;
      },
    }
}
</script>

<style scoped>
@media only screen and (max-width: 900px) {
  .v-image {
    position: inherit;
    
  }
}
</style>