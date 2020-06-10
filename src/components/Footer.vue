<template>
  <section class="hero is-dark-background">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2-desktop is-2-mobile">Mercearia Digital</h1>
        <div class="columns">
          <div class="column">
            <div class="container">
              <div class="about footer-item">
                <h3 class="subtitle is-3 has-text-dark-accent">
                  Sobre nós:
                </h3>
                <p class="content is-large">
                  Nós queremos trazer o melhor do mundo até a sua casa.
                </p>
                <router-link
                  class="button is-dark-accent is-outlined is-large"
                  to="/#app"
                  >Faça já um pedido!</router-link
                >
              </div>
            </div>
          </div>
          <div class="column">
            <div class="container">
              <div class="contact footer-item">
                <h3 class="subtitle is-3 has-text-dark-accent">
                  Contate-nos:
                </h3>
                <div class="contact-item is-flex">
                  <div class="contact-title is-flex">
                    <b-icon
                      icon="whatsapp"
                      size="is-medium"
                      type="is-dark-accent"
                    ></b-icon>
                    <h2 class="subtitle has-text-dark-accent">
                      Whatsapp:
                    </h2>
                  </div>
                  <h3 class="content is-medium contact-content">
                    (32) 99999-9999
                  </h3>
                </div>
                <div class="contact-item is-flex">
                  <div class="contact-title is-flex">
                    <b-icon
                      icon="phone-outline"
                      size="is-medium"
                      type="is-dark-accent"
                    ></b-icon>
                    <h2 class="subtitle has-text-dark-accent">
                      Telefone:
                    </h2>
                  </div>
                  <h3 class="content is-medium contact-content">
                    (32) 99999-9999
                  </h3>
                </div>
                <div class="contact-item is-flex">
                  <div class="contact-title is-flex">
                    <b-icon
                      icon="email-outline"
                      size="is-medium"
                      type="is-dark-accent"
                    ></b-icon>
                    <h2 class="subtitle has-text-dark-accent">
                      Email:
                    </h2>
                  </div>
                  <h3 class="content is-medium contact-content">
                    inexistente@merceariadigital.io
                  </h3>
                </div>
                <div class="contact-item is-flex">
                  <div class="contact-title is-flex">
                    <b-icon
                      icon="map-marker-outline"
                      size="is-medium"
                      type="is-dark-accent"
                    ></b-icon>
                    <h2 class="subtitle has-text-dark-accent">
                      Local:
                    </h2>
                  </div>
                  <h3 class="content is-medium contact-content">
                    65, Rua inexistente, Lorem Ipsum
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="container">
              <div class="social footer-item">
                <h3 class="subtitle is-3 has-text-dark-accent">
                  Redes sociais:
                </h3>

                <a
                  class="content social-link has-text-dark-accent is-flex"
                  href="https://www.github.com/etiontdn"
                >
                  <b-icon
                    icon="github"
                    size="is-medium"
                    type="is-dark-accent"
                  ></b-icon>
                  <h3 class="subtitle has-text-dark-accent is-marginless is-5">
                    Github
                  </h3>
                </a>

                <a class="content social-link has-text-dark-accent is-flex">
                  <b-icon
                    icon="twitter"
                    size="is-medium"
                    type="is-dark-accent"
                  ></b-icon>
                  <h3 class="subtitle has-text-dark-accent is-marginless is-5">
                    Twitter
                  </h3>
                </a>

                <a
                  href=""
                  class="content social-link has-text-dark-accent is-flex"
                >
                  <b-icon
                    icon="facebook"
                    size="is-medium"
                    type="is-dark-accent"
                  ></b-icon>
                  <h3 class="subtitle has-text-dark-accent is-marginless is-5">
                    Facebook
                  </h3>
                </a>

                <a
                  href=""
                  class="content social-link has-text-dark-accent is-flex"
                >
                  <b-icon
                    icon="instagram"
                    size="is-medium"
                    type="is-dark-accent"
                  ></b-icon>
                  <h3 class="subtitle has-text-dark-accent is-marginless is-5">
                    Instagram
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="credits footer-item">
          <div class="columns">
            <div class="column">
              <div class="credits-item">
                Feito por<a
                  class="ml-1 has-text-dark-accent"
                  href="https://etiontdn.github.io"
                  >Etiontdn</a
                >
              </div>
            </div>
            <div class="column"></div>
            <div class="column">
              <div class="credits-item">
                <div>
                  Icones feitos por
                  <a
                    class="has-text-dark-accent"
                    href="https://www.flaticon.com/authors/smashicons"
                    title="Smashicons"
                    >Smashicons</a
                  >
                  de
                  <a
                    class="has-text-dark-accent"
                    href="https://www.flaticon.com/"
                    title="Flaticon"
                    >www.flaticon.com</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style lang="scss" scoped>
@import '@/main.scss';

.footer-item {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
}
.contact-item {
  margin-bottom: 1.5rem;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
    .contact-content {
      margin-left: 32px;
      @media only screen and (max-width: 320px) {
        margin-left: 12px;
      }
    }
  }
  &:last-child {
    margin-bottom: 0px;
  }
  .contact-title {
    align-items: center;
  }
  .icon {
    margin-right: 5px;
  }
}

.social-link {
  align-items: center;
  &:hover {
    .subtitle {
      color: $light-background !important;
    }
    .icon {
      color: $light-background !important;
    }
  }
  .subtitle {
    font-weight: 400;
  }
  .icon {
    margin-right: 5px;
  }
}

.credits {
  border-top: 1px solid $dark-accent;
  padding-top: 1.5rem;
}
</style>
