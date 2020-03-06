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
          data-src="/partner-logos/dialogic.png"
          alt="Dialogic"
          class="lazyload"
        />
      </div>
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Dialogic
        </div>
        <div>
          Dialogic is a leading cloud-optimized solutions provider for real-time
          communications media, applications, and infrastructure to service
          providers, enterprises, and developers around the globe
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
