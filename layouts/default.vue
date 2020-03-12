<template>
  <div class="antialiased">
    <back-to-top bottom="50px" right="50px">
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
    </back-to-top>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import BackToTop from '~/plugins/BackToTop.vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
    BackToTop
  }
};
</script>

<style></style>
