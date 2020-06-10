<template>
  <div class="wrapper container">
    <div class="columns is-multiline is-mobile">
      <div
        class="column is-one-half is-one-fifth-desktop"
        v-for="product of finalList"
        :key="product.name"
      >
        <Product class="product-item" v-bind="product"></Product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
export default {
  name: 'ProductList',
  props: {
    productsList: Array,
    category: String,
  },
  data: function() {
    return {};
  },
  components: {
    Product,
  },
  computed: {
    finalList: function() {
      if (
        this.category === undefined ||
        this.category.trim() === '' ||
        this.category === 'all'
      ) {
        return this.productsList;
      }
      let category = this.category;
      let final = [];
      for (let product of this.productsList) {
        if (product.categories.includes(category)) {
          final.push(product);
        }
      }
      return final;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
