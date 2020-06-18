<template>
  <v-app>

   <home-app-bar />

    <home-view />

  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',
    components: {
      HomeAppBar: () => import('@/components/common/AppHeader'),
      HomeView: () => import('@/components/common/View'),
    },
  }
</script>

