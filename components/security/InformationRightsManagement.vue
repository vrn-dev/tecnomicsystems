<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Information Rights Management
        </div>
        <div>
          Our solution takes a different approach to document-centric security
          than legacy DRM solutions. It is a platform for accessing, syncing,
          sharing, and controlling information, while Digital Rights Management
          is just one of the popular features
        </div>
      </div>
      <div class="flex justify-center">
        <img
          data-src="/icons/information-rights-management.png"
          alt="Information Rights Management"
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
