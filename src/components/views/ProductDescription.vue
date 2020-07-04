<template>
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
      <h1 class="text-center primary--text">{{products.name}}</h1>
      <p class="text-justify accent--text">{{products.description}}</p>
    </v-col>
  </v-row>
</v-container>
</template>
<script>

export default {
    props: {
      products: {
        type: Object,
        default: () => ({}),
      },
    },
}
</script>
<style lang="scss" scoped>
.descpCol{
  display: flex;
  justify-content: flex-end;
}
</style>