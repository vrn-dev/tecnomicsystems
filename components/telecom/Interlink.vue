<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex xs:flex-col-reverse xs:items-center xs:w-11/12 xs:p-5 md:flex-row md:w-2/3 md:p-10 rounded-lg border border-purple-600 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center xs:p-6 md:w-2/3">
        <h2 class="font-semibold text-lg mb-2">
          Interlink
        </h2>
        <div class="xs:text-sm md:text-base">
          Interlink Network Systems established in the year 1991 is a Telephony
          and Enterprise Application Integration (EAI) software products and
          services company. Interlink’s products are based on a mission critical
          and redundant architecture that enables secure and guaranteed
          data/voice acquisition and delivery over the LAN/WAN and the Internet.
          With valued customers in the US, Canada, Africa, Middle East and
          South-Asia, Interlink is committed to delivering high quality products
          and services
        </div>
      </div>
      <div class="flex justify-center xs:w-11/12 md:w-1/3">
        <img
          height="200"
          width="400"
          data-src="/partner-logos/interlink.png"
          alt="Interlink"
          class="lazyload"
        />
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
