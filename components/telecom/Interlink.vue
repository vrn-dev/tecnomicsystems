<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Interlink
        </div>
        <div>
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
      <div class="flex flex-col items-center justify-center content-center">
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
