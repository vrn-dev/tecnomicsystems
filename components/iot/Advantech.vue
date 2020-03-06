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
          data-src="/partner-logos/advantech.png"
          alt="Advantech"
          class="lazyload"
        />
      </div>
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Advantech
        </div>
        <div>
          Advantech is a global leader in the fields of IoT intelligent systems
          and embedded platforms. To embrace the trends of IoT, big data, and
          artificial intelligence, Advantech promotes IoT hardware and software
          solutions with the Edge Intelligence WISE-PaaS core to assist business
          partners and clients in connecting their industrial chains
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
