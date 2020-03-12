<template>
  <div class="antialiased">
    <transition name="back-to-top-fade">
      <div v-show="visible" @click="backToTop" class="back-to-top">
        <button
          aria-label="Back to Top Button"
          class="bg-purple-600 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-full"
        >
          <img
            class="lazyload"
            alt="Back to Top Button"
            data-src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg=="
          />
        </button>
      </div>
    </transition>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    visible: false
  }),
  mounted() {
    this.smoothscroll();
  },
  destroyed() {
    window.removeEventListener('scroll', this.catchScroll);
  },
  methods: {
    catchScroll() {
      const pastTopOffset = window.pageYOffset > 600;
      this.visible = pastTopOffset;
    },
    backToTop() {
      this.smoothscroll();
    },
    smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
      window.addEventListener('scroll', this.catchScroll);
    }
  }
};
</script>

<style></style>
