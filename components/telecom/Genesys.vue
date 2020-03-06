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
          src="~/assets/partner-logos/genesys.png"
          alt=""
        />
      </div>
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Genesys
        </div>
        <div>
          Genesys powers more than 25 billion of the world’s best customer
          experiences every year. And top-industry analysts agree: Genesys is
          the only leader in both cloud and on-premises customer experience
          solutions. Great customer experience drives great business outcomes.
          More than 11,000 companies in over 100 countries trust Genesys. That’s
          how we became the industry’s #1 customer experience platform. Helping
          companies deliver seamless omnichannel customer journeys and build
          lasting relationships is what we do. From marketing, to sales, to
          service—make every moment count.
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
