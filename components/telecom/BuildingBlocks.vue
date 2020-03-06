<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Telecom Building Blocks
        </div>
        <div>
          We provide the Telecom platform Building blocs: Hardware, Software,
          Application and Services as an integrated solution
        </div>
        <div class="mt-2">
          &bull; <span class="font-bold">Service Provider</span> We work closely
          with carriers, OEM suppliers, independent software vendors to provide
          solutions in Telecom and Network connectivity elements for access,
          core, CPE and value added services
        </div>
        <div class="mt-2">
          &bull;
          <span class="font-bold">Voice Network Elements</span>
          Media Gateways | Session Border Controllers (SBC) | Transcoding |
          Voice Network Optimization
        </div>
        <div class="mt-2">
          &bull;
          <span class="font-bold">Signalling</span>
          SS7 | SIGTRAN | SIP | BICC | WebRTC
        </div>
        <div class="mt-2">
          &bull;
          <span class="font-bold">Applications</span>
          Value Added Services Platforms | Network Interconnectivity Solutions
        </div>
        <div class="mt-2">
          &bull;
          <span class="font-bold">Telecom Platform</span>
          PCI | ATCA | VME | CPCI
        </div>
        <div class="mt-2">
          &bull;
          <span class="font-bold">Services &amp; Support</span>
          Network planning | Hardware Optimization | Deployment Services | SLA
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
