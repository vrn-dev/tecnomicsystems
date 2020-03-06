<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Next Generation Firewall
        </div>
        <div>
          Whether you need to deploy a High Performance Data Centre Firewall, an
          Enterprise Next Generation Firewall or a small UTM for distributed
          Enterprise Sites or Small business, we at Securevault specialize in
          consulting &amp; deploying strategic Network Security projects for
          your enterprise
        </div>
      </div>
      <div class="flex justify-center">
        <img
          data-src="/icons/firewall.png"
          alt="Next Generation Firewall"
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
