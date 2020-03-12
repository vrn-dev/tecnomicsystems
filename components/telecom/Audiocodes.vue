<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex xs:flex-col xs:items-center xs:w-11/12 xs:p-5 md:flex-row md:w-2/3 md:p-10 rounded-lg border border-purple-600 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <!-- height="200"
          width="400" -->
      <div class="flex justify-center xs:w-11/12 md:w-1/3">
        <img
          height="200"
          width="400"
          data-src="/partner-logos/audiocodes.png"
          alt="Audiocodes"
          class="lazyload"
        />
      </div>
      <div class="flex-col justify-center xs:p-6 md:w-2/3">
        <h2 class="font-semibold text-lg mb-2">
          Audiocodes
        </h2>
        <div class="xs:text-sm md:text-base">
          Audiocodes design, manufacture and sell advanced Voice over IP and
          converged VoIP and data networking products, applications and
          professional services to global enterprises, medium and small
          business, as well as to service providers globally. Their extensive
          product range includes IP phones, session border controllers (SBCs),
          media gateways, mobile VoIP clients, multi-service business routers
          (MSBRs), routing applications, call recording, voice dialing, and more
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
