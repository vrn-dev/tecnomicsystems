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
          src="~/assets/partner-logos/audiocodes.png"
          alt=""
        />
      </div>
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Audiocodes
        </div>
        <div>
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
