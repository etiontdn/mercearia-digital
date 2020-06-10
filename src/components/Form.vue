<template>
  <form class="section is-paddingless-mobile" action="">
    <h2 class="title has-text-centered is-2">Informações do pedido</h2>
    <section>
      <b-field label="Nome*" :type="nameInputType" :message="nameInputMessage">
        <b-input
          ref="name"
          icon="account"
          @blur="checkInput('name')"
          @input="checkInput('name')"
          required
          v-model="nameInput"
          size="is-medium"
          title="Favor preencher"
        ></b-input>
      </b-field>

      <b-field
        label="Email*"
        :type="emailInputType"
        :message="emailInputMessage"
      >
        <b-input
          ref="email"
          type="email"
          icon="email"
          v-model="emailInput"
          @blur="checkInput('email')"
          @input="checkInput('email')"
          placeholder="exemplo@email.com"
          required
          size="is-medium"
          title="Favor preencher"
          validation-message="Tem certeza que este email esta correto?"
        >
        </b-input>
      </b-field>

      <b-field
        label="Telefone*"
        :type="telephoneInputType"
        :message="telephoneInputMessage"
      >
        <b-input
          ref="telephone"
          v-model="telephoneInput"
          type="tel"
          icon="phone"
          @blur="checkInput('telephone')"
          @input="checkInput('telephone')"
          placeholder="(32) 99999-9999"
          size="is-medium"
          maxlength="15"
          required
        ></b-input>
      </b-field>

      <b-field
        label="Endereço*"
        :type="addressInputType"
        :message="addressInputMessage"
      >
        <b-input
          ref="address"
          type="address"
          v-model="addressInput"
          icon="map-marker"
          @blur="checkInput('address')"
          @input="checkInput('address')"
          placeholder="Rua Exemplo, 52, Bairro Exemplo, Juiz de Fora"
          size="is-medium"
          required
        ></b-input>
      </b-field>

      <b-field
        label="Informações sobre o pedido*"
        :type="infoInputType"
        :message="infoInputMessage"
      >
        <b-input
          required
          ref="info"
          v-model="infoInput"
          @blur="checkInput('info')"
          @input="checkInput('info')"
          size="is-medium"
          type="textarea"
          title="Favor preencher"
        ></b-input>
      </b-field>
      <p class="help content">
        É necessário preencher todos os campos com *.
      </p>
      <p class="help">Iremos enviar um email de confirmação para o pedido.</p>
      <b-field>
        <div class="action-buttons has-text-centered">
          <b-button @click="checkAllInputs()" type="is-primary" size="is-large"
            >Enviar</b-button
          >
        </div>
      </b-field>
    </section>
  </form>
</template>
<script>
export default {
  name: 'Form',
  props: {
    order: Array,
  },
  data: function() {
    return {
      nameInput: '',
      emailInput: '',
      telephoneInput: '',
      infoInput: '',
      addressInput: '',
      inputList: {
        name: {
          id: 'name',
          state: 'Default',
          Wrong: {
            type: 'is-danger',
            message: 'Favor preencher',
          },
          Right: {
            type: 'is-success',
            message: '',
          },
          Default: {
            type: '',
            message: '',
          },
        },
        email: {
          id: 'email',
          state: 'Default',
          Wrong: {
            type: 'is-danger',
            message: 'Tem certeza que este email está correto?',
          },
          Right: {
            type: 'is-success',
            message: '',
          },
          Default: {
            type: '',
            message: '',
          },
        },
        telephone: {
          id: 'tel',
          state: 'Default',
          Wrong: {
            type: 'is-danger',
            message: 'Favor preencher',
          },
          Right: {
            type: 'is-success',
            message: '',
          },
          Default: {
            type: '',
            message: '',
          },
        },
        info: {
          id: 'info',
          state: 'Default',
          Wrong: {
            type: 'is-danger',
            message: 'Favor preencher',
          },
          Right: {
            type: 'is-success',
            message:
              'Informações adicionais sobre o pedido. (Melhor informação sobre como chegar até a sua casa, nome a que chamar, etc.)',
          },
          Default: {
            type: '',
            message:
              'Informações adicionais sobre o pedido. (Melhor informação sobre como chegar até a sua casa, nome a que chamar, etc.)',
          },
        },
        address: {
          id: 'info',
          state: 'Default',
          Wrong: {
            type: 'is-danger',
            message: 'Favor preencher',
          },
          Right: {
            type: 'is-success',
            message: 'Endereço no formato: Rua, Nº, Bairro, Cidade',
          },
          Default: {
            type: '',
            message: 'Endereço no formato: Rua, Nº, Bairro, Cidade',
          },
        },
      },
    };
  },
  methods: {
    openSuccess: function() {
      this.$buefy.toast.open({
        duration: 30000,
        message:
          'Recebemos seu pedido, iremos enviar um email para confirma-lo.',
        type: 'is-success',
      });
      this.nameInput = '';
      this.emailInput = '';
      this.telephoneInput = '';
      this.infoInput = '';
      this.addressInput = '';
      for (let counter = 0; counter < this.order.length; counter++) {
        this.$parent.remove(0);
      }
    },
    checkInput: function(input) {
      let inputElement = this.$refs[input];
      inputElement.checkHtml5Validity();
      if (inputElement.isValid) {
        this.inputList[input].state = 'Right';
        return true;
      } else {
        this.inputList[input].state = 'Wrong';
        return false;
      }
    },
    checkAllInputs: function() {
      if (this.order.length === 0) {
        this.$buefy.toast.open({
          message: 'Sem ordems',
          type: 'is-danger',
        });
        return;
      }
      let checkList = [];
      for (let input of Object.keys(this.inputList)) {
        checkList.push(this.checkInput(input));
      }
      let isCorrect = checkList.every(v => v === true);
      if (isCorrect) {
        this.$buefy.dialog.confirm({
          title: 'Confirmação',
          message: `<h3 class="title is-5">Confirme seus detalhes:</h3>
            <div class="content is-medium">
              <p>Nome: ${this.nameInput}</p>
              <p>Email: ${this.emailInput}</p>
              <p>Telefone: ${this.telephoneInput}</p>
              <p>Endereço: ${this.addressInput}</p>
              <p class="break-all">Informações adicionais: ${this.infoInput}</p>
              <h3 class="title is-4">Preço final: ${this.finalPrice}</h3>
            </div>`,
          cancelText: 'Voltar',
          confirmText: 'Confirmar',
          onConfirm: this.openSuccess,
        });
      }
    },
  },
  computed: {
    nameInputType: function() {
      return this.inputList.name[this.inputList.name.state].type;
    },
    nameInputMessage: function() {
      return this.inputList.name[this.inputList.name.state].message;
    },
    emailInputType: function() {
      return this.inputList.email[this.inputList.email.state].type;
    },
    emailInputMessage: function() {
      return this.inputList.email[this.inputList.email.state].message;
    },
    telephoneInputType: function() {
      return this.inputList.telephone[this.inputList.telephone.state].type;
    },
    telephoneInputMessage: function() {
      return this.inputList.telephone[this.inputList.telephone.state].message;
    },
    infoInputType: function() {
      return this.inputList.info[this.inputList.info.state].type;
    },
    infoInputMessage: function() {
      return this.inputList.info[this.inputList.info.state].message;
    },
    addressInputType: function() {
      return this.inputList.address[this.inputList.address.state].type;
    },
    addressInputMessage: function() {
      return this.inputList.address[this.inputList.address.state].message;
    },
    finalPrice: function() {
      let finalPrice = 0;
      for (let product of this.order) {
        finalPrice += product.quantity * product.product.price;
      }
      return finalPrice.toFixed(2);
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  max-width: 550px !important;
  width: 100%;
  margin: auto;
}
div.action-buttons {
  button {
    margin-top: 35px;
  }
}
</style>
<style lang="scss">
.break-all {
  word-break: break-all;
}
</style>
