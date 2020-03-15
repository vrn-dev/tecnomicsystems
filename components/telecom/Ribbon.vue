<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex xs:flex-col-reverse xs:items-center xs:w-11/12 xs:p-5 md:flex-row md:w-2/3 md:p-10 rounded-lg border border-purple-600 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center xs:p-6 md:w-2/3">
        <h2 class="font-semibold text-lg mb-2">
          Ribbon
        </h2>
        <div class="xs:text-sm md:text-base">
          Ribbon Communications Inc. delivers market-leading software and
          hardware solutions that secure and power many of the world's leading
          service provider and enterprise communications environments. Built on
          world-class technology and intellectual property, the company's
          cloud-native solutions deliver intelligent and secure real-time
          communications solutions for the cloud, network and enterprise edge
        </div>
      </div>
      <div class="flex justify-center xs:w-11/12 md:w-1/3">
        <img
          data-src="/partner-logos/ribbon.png"
          alt="Ribbon Comminications"
          class="h-32 lazyload"
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
