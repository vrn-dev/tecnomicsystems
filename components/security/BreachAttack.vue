<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Breach Attack Simulation
        </div>
        <div>
          Our BAS technologies and tools allow enterprises to continually and
          consistently simulate the full attack cycle (including insider
          threats, lateral movement and data exfiltration) against enterprise
          infrastructure, using software agents, virtual machines, and other
          means
        </div>
      </div>
      <img
        src="~/assets/icons/breach-attack-simulation.png"
        alt=""
        class="h-56"
      />
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
