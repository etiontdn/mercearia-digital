<template
  ><div class="product-container section has-background-light-background">
    <div class="container">
      <div class="inexistent" v-if="productNotFound">
        <h3 class="title is-2 has-text-centered">Produto não encontrado</h3>
      </div>
      <div v-if="!productNotFound" class="columns">
        <div class="column">
          <figure class="image">
            <img :src="imageSrc" alt="placeholder+image" />
          </figure>
        </div>
        <div class="column">
          <div class="content is-large has-text-centered">
            <h3 class="title product-title is-1">{{ name }}</h3>
            <p class="subtitle is-3 is-marginless">Preço:</p>
            <p class="subtitle is-3 ">R${{ price }}</p>
            <b-field
              class="counter-wrapper"
              :type="{ 'is-danger': isInputInvalid }"
              :message="{ 'Quantidade inválida': isInputInvalid }"
            >
              <b-numberinput v-model="productCounter" min="0"></b-numberinput>
            </b-field>
            <p class="subtitle is-3 is-marginless">Preço final:</p>
            <p class="subtitle is-3">R${{ finalPrice }}</p>
            <b-button
              :disabled="!isButtonValid"
              @click="addToCartCall()"
              icon-right="cart"
              type="is-primary"
              size="is-medium"
              >Adicionar ao Carrinho</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsJSON from '@/products.json';

export default {
  name: 'ProductView',
  data: function() {
    return {
      name: '',
      image: '',
      price: '',
      link: '',
      imageSrc: '',
      productCounter: 0,
      productNotFound: false,
    };
  },
  computed: {
    isInputInvalid: function() {
      if (
        !isNaN(this.productCounter) &&
        Number(this.productCounter) >= 0 &&
        this.productCounter !== null
      ) {
        return false;
      } else {
        return true;
      }
    },
    isButtonValid: function() {
      if (this.isInputInvalid || this.productCounter === 0) {
        return false;
      } else {
        return true;
      }
    },
    finalPrice: function() {
      if (!this.isInputInvalid) {
        return (this.price * this.productCounter).toFixed(2);
      }
      return 0.0;
    },
  },
  methods: {
    addToCartCall: function() {
      this.$parent.addToCart(this.name, this.productCounter);
    },
    findCurrentProduct: function(route) {
      for (let product of productsJSON.products) {
        if (product.link === route) {
          return product;
        }
      }
      return null;
    },
    updateCurrentProduct: function() {
      let product = this.findCurrentProduct(this.$route.path);
      if (product === null) {
        this.productNotFound = true;
      } else {
        this.name = product.name;
        this.image = product.image;
        this.price = product.price;
        this.link = product.link;
        this.imageSrc = require('@/assets/' + this.image);
        this.productNotFound = false;
      }
      this.productCounter = 0;
    },
  },
  mounted: function() {
    this.updateCurrentProduct();
  },
  watch: {
    $route: function() {
      this.updateCurrentProduct();
    },
  },
};
</script>

<style lang="scss" scoped>
span.is-relative {
  bottom: 2px;
}
.counter {
  margin: 15px;
  position: relative;
  top: 6px;
}

.image {
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 60%;
  }
  width: 80%;
}

.counter-wrapper {
  max-width: 248.25px;
  margin: auto;
  margin-bottom: 42px;
}

.inexistent {
  height: 500px;
}
</style>
