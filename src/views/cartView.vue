<template>
  <div class="cart-container section has-background-light-background">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="section is-paddingless-mobile">
            <h3 class="title has-text-centered is-2">Ordem</h3>
            <p v-if="isOrderEmpty" class="content has-text-centered is-medium">
              Sem ordems
            </p>
            <listOrder class="orderlist" :order="order"></listOrder>
            <h3 v-if="!isOrderEmpty" class="title has-text-centered is-3">
              Preço final à pagar: {{ finalPrice }}
            </h3>
          </div>
        </div>
        <div class="column">
          <Form :order="order"></Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsJSON from '@/products.json';
import listOrder from '@/components/listOrder.vue';
import Form from '@/components/Form.vue';

console.log(productsJSON.products);

export default {
  name: 'cartView',
  components: {
    listOrder,
    Form,
  },
  computed: {
    order: function() {
      return this.$parent.cartOrder;
    },
    isOrderEmpty: function() {
      return this.order.length <= 0;
    },
    finalPrice: function() {
      let finalPrice = 0;
      for (let product of this.order) {
        finalPrice += product.quantity * product.product.price;
      }
      return finalPrice.toFixed(2);
    },
  },
  methods: {
    remove: function(id) {
      this.$parent.removeFromCart(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.orderlist {
  margin: 15px;
  @media only screen and (max-width: 801px) {
    margin: 0;
    margin-bottom: 15px;
  }
  margin-bottom: 30px;
}

.is-paddingless-mobile {
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
}
</style>
