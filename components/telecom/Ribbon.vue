<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Ribbon
        </div>
        <div>
          Ribbon Communications Inc. (Nasdaq: RBBN) delivers market-leading
          software and hardware solutions that secure and power many of the
          world's leading service provider and enterprise communications
          environments. Built on world-class technology and intellectual
          property, the company's cloud-native solutions deliver intelligent and
          secure real-time communications solutions for the cloud, network and
          enterprise edge
        </div>
      </div>
      <div class="flex flex-col items-center justify-center content-center">
        <img
          height="200"
          width="400"
          data-src="/partner-logos/ribbon.png"
          alt="Ribbon Comminications"
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
