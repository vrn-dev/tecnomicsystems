<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex xs:flex-col xs:items-center xs:w-11/12 xs:p-5 md:flex-row md:w-2/3 md:p-10 rounded-lg border border-purple-600 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex justify-center xs:w-11/12 md:w-1/3">
        <img
          data-src="/partner-logos/busylight.png"
          alt="Kuando Busylight"
          class="h-48 lazyload"
        />
      </div>
      <div class="flex-col justify-center xs:p-6 md:w-2/3">
        <h2 class="font-semibold text-lg mb-2">
          Kuando Busylight
        </h2>
        <div class="xs:text-sm md:text-base">
          Less interruptions - more productivity! A do not disturb presence
          status light is ideal for Modern open office workspaces and cubicles.
          A Built-in speaker delivers an audible call alert while flashing the
          light to avoid missing calls. Integrates with headset, desk phone or
          softphone and works as an on-the-phone indicator light. Supports many
          UC platforms like, Microsoft Teams, Skype4B, Lync, Cisco Jabber,
          RingCentral, Avaya, 3CX, Zoom &amp; more
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
