<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
//import AppHeader from './components/common/AppHeader';

export default {
  name: 'App',
  // components: {
  //   AppHeader,
  // },

  data: () => ({
    //
  }),
};
</script>
