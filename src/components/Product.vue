<template>
  <router-link class="link" :to="link">
    <div class="product is-flex">
      <figure class="image is-64x64">
        <img :src="imageSrc" alt="placeholder+image" />
      </figure>
      <h2 class="title is-4">{{ name }}</h2>
      <p class="subtitle is-5">R${{ price }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Product',
  props: {
    name: String,
    image: String,
    price: Number,
    link: String,
  },
  data: function() {
    return {
      imageSrc: require('@/assets/' + this.image),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/main.scss';

.product {
  margin: auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:hover {
    background-color: rgba($light-accent, 0.2);
  }
}
.image {
  margin: 15px;
}
</style>
