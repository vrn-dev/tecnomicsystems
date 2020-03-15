<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex xs:flex-col xs:items-center xs:w-11/12 xs:p-5 md:flex-row md:w-2/3 md:p-10 rounded-lg border border-purple-600 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex justify-center xs:w-11/12 md:w-1/3">
        <img
          data-src="/partner-logos/lantronix.png"
          alt="Lantronix"
          class="h-16 lazyload"
        />
      </div>
      <div class="flex-col justify-center xs:p-6 md:w-2/3">
        <h2 class="font-semibold text-lg mb-2">
          Lantronix
        </h2>
        <div class="xs:text-sm md:text-base">
          Lantronix takes care of IoT connectivity, manageability, and security
          so you can take care of business. For over 25 years they have been
          helping OEMs, system integrators and end users bring connected
          products to market faster. Lantronix's production-ready, hardened IoT
          solutions allow you to focus on getting your products to your
          customers confidently and securely
        </div>
      </div>
    </div>
  </intersect>
</template>

<script>
import { VueIntersect as Intersect } from '~/plugins/vue-intersect';
export default {
  components: { Intersect },
  data: () => ({
    section1: false
  })
};
</script>
