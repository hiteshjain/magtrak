<template>
    <v-navigation-drawer
        id="transitionDrawer"
        fixed
        overlay-color="secondary"
        overlay-opacity=".8"
        temporary
        v-bind="$attrs"
        v-on="$listeners"
    >
    <v-list
      shaped
    >
      <v-list-item
        v-for="name in items"
        :key="name"  
        :to="{ name }"
        :exact="name === 'Home'"      
        color="white"
      >
        <v-list-item-content>
          <v-list-item-title v-text="name" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
    name:'tabNavigator',
    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
    data : ()=>({
      drawer:null
    })

}
</script>

<style scoped>
#transitionDrawer {
  background: linear-gradient(to right, #2962FF 0%, #90CAF9 100%);
}
</style>