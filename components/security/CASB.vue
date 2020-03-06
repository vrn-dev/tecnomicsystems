<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex justify-center">
        <img
          data-src="/icons/cloud-access-security-broker1.png"
          alt="Cloud Access Security Broker CASB"
          class="h-56 lazyload"
        />
      </div>
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Cloud Access Security Broker
        </div>
        <div>
          CASBs work by ensuring that network traffic between on-premises
          devices and the cloud provider complies with the organization's
          security policies. The value of cloud access security brokers stems
          from their ability to give insight into cloud application use across
          cloud platforms and identity unsanctioned use. This is especially
          important in regulated industries
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
