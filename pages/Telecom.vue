<template>
  <div>
    <div class="container bg-blue-100">
      <div class="flex flex-col">
        <h1 class="subtitle">Telecom</h1>

        <Quicklook @refName="scrollToAnchor" />

        <main class="flex flex-col justify-center items-center content-center">
          <TelecomBuildingBlocks ref="tbb" />
          <div class="border border-1 border-pink-700 w-2/3 mt-10"></div>
          <h2 class="subtitle">Unified Communications</h2>
          <Audiocodes ref="sbc" />
          <Ribbon />
          <div class="border border-1 border-pink-700 w-2/3 mt-10"></div>
          <div class="subtitle mt-10">Contact Center</div>
          <Genesys ref="cc" />
          <Interlink />
          <div class="border border-1 border-pink-700 w-2/3 mt-10"></div>
          <div class="subtitle mt-10">
            Gateways | IP PBX | Voice Cards | SS7 | Peripherals
          </div>
          <Dialogic ref="gateways" />
          <Enghouse />
          <Sangoma />
          <Innovaphone ref="pbx" />
          <Busylight ref="peripherals" />
          <div class="border border-1 border-pink-700 w-2/3 mt-10"></div>
          <div class="subtitle mt-10">
            Services
          </div>
          <PS ref="ps" />
        </main>
        <div class="spacer-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Quicklook from '~/components/telecom/Quicklook.vue';
import TelecomBuildingBlocks from '~/components/telecom/BuildingBlocks.vue';
import Audiocodes from '~/components/telecom/Audiocodes.vue';
import Ribbon from '~/components/telecom/Ribbon.vue';
import Genesys from '~/components/telecom/Genesys.vue';
import Interlink from '~/components/telecom/Interlink.vue';
import Dialogic from '~/components/telecom/Dialogic.vue';
import Enghouse from '~/components/telecom/Enghouse.vue';
import Sangoma from '~/components/telecom/Sangoma.vue';
import Innovaphone from '~/components/telecom/Innovaphone.vue';
import Busylight from '~/components/telecom/Busylight.vue';
import PS from '~/components/telecom/PS.vue';

export default {
  components: {
    Quicklook,
    TelecomBuildingBlocks,
    Audiocodes,
    Ribbon,
    Genesys,
    Interlink,
    Dialogic,
    Enghouse,
    Sangoma,
    Innovaphone,
    Busylight,
    PS
  },
  data: () => ({
    chipClass:
      'border border-purple-700 p-5 m-10 font-semibold hover:bg-purple-300 rounded-full',
    isOpen: false
  }),
  methods: {
    scrollToAnchor(refName) {
      const el = this.$refs[refName];
      el.$el.scrollIntoView({ behaviour: 'smooth' });
      this.isOpen = false;
    }
  },
  head() {
    return {
      title: 'Tecnomic | Telecom'
    };
  }
};
</script>

<style></style>
