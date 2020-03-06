<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-10"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Data Loss/Leakage Prevention
        </div>
        <div>
          With our industry leading solutions, you can quickly and easily
          monitor real-time events and apply centrally managed security policies
          to regulate and restrict how employees use and transfer sensitive data
        </div>
      </div>
      <div class="flex justify-center">
        <img
          data-src="/icons/data-loss-prevention.png"
          alt="Data Loss Prevention or Protection DLP"
          class="h-56 lazyload"
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

<style></style>
