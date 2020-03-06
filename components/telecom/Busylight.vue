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
          src="~/assets/partner-logos/busylight.png"
          alt=""
        />
      </div>
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Kuando Busylight
        </div>
        <div>
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
