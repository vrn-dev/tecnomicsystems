<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <img src="~/assets/icons/security-scoring.png" alt="" class="h-56" />
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Security Scoring
        </div>
        <div>
          Our Security Scoring services help you understand the health of you
          cyber ecosystem across multiple risk factors including but not limited
          to Network Security, DNS Health, Pathcing Cadence, Endpoint Security
          and Web Application Security
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
