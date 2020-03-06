<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex justify-center">
        <img
          data-src="/icons/siem.png"
          alt="Security Incident and Event Management SIEM"
          class="h-56 lazyload"
        />
      </div>
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Security Incident &amp; Event Management (SIEM)
        </div>
        <div>
          Protecting against today’s rapidly evolving threat landscape requires
          broad and deep visibility across the entire IT environment
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
