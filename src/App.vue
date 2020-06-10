<template>
  <div id="app has-background-light-background">
    <Navbar class="nav"></Navbar>
    <router-view />
    <div class="floating-order is-hidden-tablet">
      <router-link to="/carrinho" class="is-relative">
        <b-button class="floating-button" type="is-primary" icon-left="cart">
        </b-button>
        <div class="test">
          <b-button type="is-danger" size="is-small">{{ orderCount }}</b-button>
        </div>
      </router-link>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import productsJSON from './products.json';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data: function() {
    return {
      possibleProducts: productsJSON.products,
      cartOrder: [],
    };
  },
  computed: {
    orderCount: function() {
      return this.cartOrder.length;
    },
  },
  methods: {
    addToCart: function(name, quantity) {
      let finalProduct = undefined;
      if (quantity <= 0) {
        return 0;
      }
      for (let product of this.possibleProducts) {
        if (name === product.name) {
          finalProduct = product;
        }
      }
      if (finalProduct === undefined) {
        return 0;
      } else {
        this.cartOrder.push({
          product: finalProduct,
          quantity,
          id: this.cartOrder.length,
        });
        return 1;
      }
    },
    removeFromCart: function(id) {
      this.cartOrder = this.cartOrder.filter(a => {
        return a.id != id;
      });
      let counter = 0;
      for (let order of this.cartOrder) {
        order.id = counter;
        counter++;
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title {
  font-family: 'Montserrat', sans-serif;
}
.subtitle {
  font-family: 'Montserrat', sans-serif;
}
.content {
  font-family: 'Montserrat', sans-serif;
}

.floating-order {
  position: fixed;
  bottom: 24px;
  right: 12px;
}

.floating-button {
  border-radius: 9999px !important;
  width: 50%;
  padding: 25px !important;
}

.button:active {
  transform: scale(0.96);
}

.test {
  position: absolute;
  top: 25px;
  right: -15px;
  .button {
    padding: 15px;
    width: 50%;
    border-radius: 9999px !important;
  }
}

@import './main.scss';
</style>
