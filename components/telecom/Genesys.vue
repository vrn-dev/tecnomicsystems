<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex xs:flex-col xs:items-center xs:w-11/12 xs:p-5 md:flex-row md:w-2/3 md:p-10 rounded-lg border border-purple-600 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex justify-center xs:w-11/12 md:w-1/3">
        <img
          height="200"
          width="400"
          data-src="/partner-logos/genesys.png"
          alt="Genesys"
          class="lazyload"
        />
      </div>
      <div class="flex-col justify-center xs:p-6 md:w-2/3">
        <h2 class="font-semibold text-lg mb-2">
          Genesys
        </h2>
        <div class="xs:text-sm md:text-base">
          Genesys powers more than 25 billion of the world’s best customer
          experiences every year. And top-industry analysts agree: Genesys is
          the only leader in both cloud and on-premises customer experience
          solutions. Great customer experience drives great business outcomes.
          More than 11,000 companies in over 100 countries trust Genesys. That’s
          how they became the industry’s #1 customer experience platform.
          Helping companies deliver seamless omnichannel customer journeys.
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
