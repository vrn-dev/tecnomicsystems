<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex xs:flex-col xs:items-center xs:w-11/12 xs:p-5 md:flex-row md:w-2/3 md:p-10 rounded-lg border border-purple-600 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex justify-center xs:w-11/12 md:w-1/3">
        <img
          data-src="/icons/brand-protection.png"
          alt="Brand Protection"
          class="h-56 lazyload"
        />
      </div>
      <div class="flex-col justify-center xs:p-6 md:w-2/3">
        <h2 class="font-semibold text-lg mb-2">
          Brand Monitoring &amp; Protection
        </h2>
        <div class="xs:text-sm md:text-base">
          With our Brand Monitoring &amp; Protection tools and services, you
          will be able to prevent bad actors from infringing your brand
          illegally by using your intellectual property and/or brand name
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

<style></style>
