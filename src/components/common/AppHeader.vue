<template>
    <v-app>
    <v-app-bar
      app
      color="white"
      elevation="1"
      height="80"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
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
      <v-icon
        @click="dial(phone)"
      >mdi-phone</v-icon>
    </v-app-bar>
   <NavigationDrawer
      v-model="drawer"
      :items="items"
    />
  </v-app>
</template>
<script>
import NavigationDrawer from './NavigationDrawer'
export default {
    name:'AppHeader',
    components:{
        NavigationDrawer
    },
    data:() =>({
        phone:+917778889000,
        drawer:false,
        items: [
        'Home',
        'About',
        'Contact',
        'Pro',
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