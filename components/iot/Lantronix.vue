<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex flex-col items-center justify-center content-center">
        <img
          height="200"
          width="400"
          src="~/assets/partner-logos/lantronix.png"
          alt=""
        />
      </div>
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Lantronix
        </div>
        <div>
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
