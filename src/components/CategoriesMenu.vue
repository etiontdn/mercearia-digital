<template>
  <div>
    <b-menu>
      <b-menu-list label="Categorias">
        <b-menu-item
          icon=""
          label="Frutas"
          @click="currentlyActive = 'fruit'"
          :active="isItemActive('fruit')"
        ></b-menu-item>
        <b-menu-item
          icon=""
          label="Vegetais"
          @click="currentlyActive = 'vegetable'"
          :active="isItemActive('vegetable')"
        ></b-menu-item>
        <b-menu-item
          icon=""
          label="Pães"
          @click="currentlyActive = 'bread'"
          :active="isItemActive('bread')"
        ></b-menu-item>
        <b-menu-item
          icon=""
          label="Bebidas"
          @click="currentlyActive = 'drinks'"
          :active="isItemActive('drinks')"
        ></b-menu-item>
        <b-menu-item
          icon=""
          label="Animal e derivados"
          @click="currentlyActive = 'animal'"
          :active="isItemActive('animal')"
        ></b-menu-item>
        <b-menu-item
          icon=""
          label="Ingredientes"
          @click="currentlyActive = 'ingredient'"
          :active="isItemActive('ingredient')"
        ></b-menu-item>
        <b-menu-item
          icon=""
          label="Carne"
          @click="currentlyActive = 'meat'"
          :active="isItemActive('meat')"
        ></b-menu-item>
        <b-menu-item
          icon=""
          label="Doces"
          @click="currentlyActive = 'sweet'"
          :active="isItemActive('sweet')"
        ></b-menu-item>
        <b-menu-item
          icon=""
          label="Todos"
          @click="currentlyActive = 'all'"
          :active="isItemActive('all')"
        ></b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>
<script>
export default {
  name: 'CategoriesMenu',
  data: function() {
    return {
      currentlyActive: 'all',
    };
  },
  methods: {
    isItemActive: function(item) {
      if (item === this.currentlyActive) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    currentlyActive: function() {
      this.$parent.activeCategory = this.currentlyActive;
    },
  },
};
</script>
<style lang="scss" scoped></style>
