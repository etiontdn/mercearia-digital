<template>
  <section class="hero is-primary is-small">
    <div class="hero-body">
      <div class="container is-flex">
        <router-link to="/">
          <div class="logo is-flex">
            <figure class="image is-64x64 is-hidden-mobile">
              <img src="@/assets/grocery.svg" alt="placeholder+image" />
            </figure>
            <div class="">
              <h1 class="title is-marginless">
                Mercearia Digital
              </h1>

              <h2 class="subtitle is-marginless is-pulled-left-desktop">
                Compras sem sair de casa!
              </h2>
            </div>
          </div>
        </router-link>
        <div class="searchbar is-hidden-mobile is-relative">
          <b-field class="is-marginless">
            <b-input
              placeholder="Procurando por algo em específico?"
              v-model="searchBarContent"
              icon-right="magnify"
              expanded
            ></b-input>
          </b-field>
          <div
            class="recommendations"
            @click="searchBarContent = ''"
            v-if="showRecommendations"
          >
            <router-link
              v-for="product of recommendations"
              :key="product.name"
              :to="product.link"
              class="recommendations-item box"
              >{{ product.name }}</router-link
            >
          </div>
        </div>
        <div class="order is-hidden-mobile">
          <router-link to="/carrinho">
            <b-button
              type="is-light-accent is-outlined is-inverted"
              icon-left="cart"
              >{{ orderCounter }}</b-button
            >
          </router-link>
        </div>
      </div>
      <div class="is-hidden-tablet">
        <div class="searchbar is-relative">
          <b-field class="is-marginless">
            <b-input
              placeholder="Procurando por algo específico?"
              v-model="searchBarContent"
              icon-right="magnify"
              expanded
            ></b-input>
          </b-field>
          <div
            class="recommendations"
            @click="searchBarContent = ''"
            v-if="showRecommendations"
          >
            <router-link
              v-for="product of recommendations"
              :key="product.name"
              :to="product.link"
              class="recommendations-item box"
              >{{ product.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import productsJSON from '@/products.json';

export default {
  name: 'Navbar',
  data: function() {
    return {
      searchBarContent: '',
      showRecommendations: false,
    };
  },
  computed: {
    recommendations: function() {
      let rec = this.searchRecommendations(this.searchBarContent, 5);
      return rec;
    },
    orderCounter: function() {
      let counter = this.$parent.cartOrder.length;
      return counter;
    },
  },
  watch: {
    searchBarContent: function() {
      if (this.searchBarContent === '') {
        this.showRecommendations = false;
      } else {
        this.showRecommendations = true;
      }
    },
  },
  methods: {
    searchRecommendations: function(searchContent, resultsNum) {
      let counter = 0;
      let resultList = [];
      function isResult(productName, searchContent) {
        productName = productName
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        searchContent = searchContent
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

        if (productName.slice(0, searchContent.length) === searchContent) {
          return true;
        } else {
          return false;
        }
      }
      for (let product of productsJSON.products) {
        if (isResult(product.name, searchContent) && counter < resultsNum) {
          resultList.push({ name: product.name, link: product.link });
          counter++;
        }
      }

      if (resultList.length === 0) {
        let sorryMessage = 'Desculpe, não encontramos nenhum resultado.';
        resultList.push({ name: sorryMessage, link: '' });
      }

      return resultList;
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  align-items: stretch;
  .image {
    margin-right: 15px;
    position: relative;
    bottom: 6px;
  }
}

.recommendations {
  position: absolute;
  z-index: 10;
  width: 100%;
  .recommendations-item {
    padding: 8px;
    margin-bottom: 1px;
  }
}

.container {
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
}
.searchbar {
  margin: 0px 15px 0px 15px;
  flex: 1;
}
</style>
