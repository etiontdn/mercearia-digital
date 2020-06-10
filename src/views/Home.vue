<template>
  <div class="home section has-background-light-background">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <CategoriesMenu ref="categories"></CategoriesMenu>
        </div>
        <div class="column is-two-thirds">
          <div class="">
            <ProductsList
              class="products-list"
              :productsList="products"
              :category="activeCategory"
            ></ProductsList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import CategoriesMenu from '@/components/CategoriesMenu.vue';
import productsJSON from '@/products.json';

export default {
  name: 'Home',
  data: function() {
    return {
      products: productsJSON.products,
      activeCategory: 'all',
    };
  },
  components: {
    CategoriesMenu,
    ProductsList,
  },
};
</script>
