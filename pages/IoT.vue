<template>
  <div>
    <div class="container bg-blue-100">
      <div class="flex flex-col">
        <h1 class="subtitle">IoT &amp; Industrial Automation</h1>

        <main class="flex flex-col justify-center items-center content-center">
          <Advantech ref="iot" />
          <Kontron />
          <Lantronix />
        </main>
        <div class="spacer-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Advantech from '~/components/iot/Advantech.vue';
import Kontron from '~/components/iot/Kontron.vue';
import Lantronix from '~/components/iot/Lantronix.vue';

export default {
  components: {
    Advantech,
    Kontron,
    Lantronix
  },
  head() {
    return {
      title: 'Tecnomic | IoT'
    };
  }
};
</script>

<style></style>
