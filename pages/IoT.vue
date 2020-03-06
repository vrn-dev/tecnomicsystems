<template>
  <div>
    <div class="container bg-blue-100">
      <div class="flex flex-col">
        <div class="subtitle">IoT &amp; Industrial Automation</div>

        <div class="flex flex-col justify-cente items-center content-center">
          <Advantech ref="iot" />
          <Kontron />
          <Lantronix />
        </div>
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
  }
};
</script>

<style></style>
