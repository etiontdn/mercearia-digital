<template>
  <div class="container">
    <div class="card is-flex" v-for="product of order" :key="product.id">
      <div class="wrapper is-flex">
        <figure class="image is-64x64">
          <img :src="getImage(product.product.image)" alt="placeholder+image" />
        </figure>
        <div>
          <h3 class="title is-marginless">
            {{ product.product.name }}: {{ product.quantity }}
          </h3>
          <div class="prices is-flex">
            <h3 class="subtitle is-marginless">
              Preço: {{ product.product.price }}
            </h3>
            <h3 class="subtitle is-marginless">
              Preço final:
              {{ (product.product.price * product.quantity).toFixed(2) }}
            </h3>
          </div>
        </div>
      </div>
      <b-icon
        class="remove-button is-hidden-mobile"
        @click.native="remove(product.id)"
        icon="delete"
        size="is-large"
      ></b-icon>
      <b-icon
        class="remove-button is-hidden-tablet"
        @click.native="remove(product.id)"
        icon="delete"
        size="is-medium"
      ></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listOrder',
  props: {
    order: Array,
  },
  methods: {
    getImage: function(name) {
      return require('@/assets/' + name);
    },
    remove: function(id) {
      this.$parent.remove(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 15px;
  align-items: center;
  justify-content: space-between;
}

.remove-button.is-hidden-tablet {
  position: relative;
  bottom: 30px;
  left: 5px;
}

.prices {
  .subtitle:first-child {
    padding-right: 15px;
  }
}

.wrapper {
  align-items: center;
}

.icon:active {
  transform: scale(0.9);
}
.icon:hover {
  color: grey;
}

.image {
  margin-right: 15px;
}
</style>
