<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex xs:flex-col-reverse xs:items-center xs:w-11/12 xs:p-5 md:flex-row md:w-2/3 md:p-10 rounded-lg border border-purple-600 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center xs:p-6 md:w-2/3">
        <h2 class="font-semibold text-lg mb-2">
          Vulnerabilty Analysis / Penetration Testing
        </h2>
        <div class="xs:text-sm md:text-base">
          Our Vulnerabilty Analysis services discover which vulnerabilities are
          present and alert you to the pre-existing flaws.
        </div>
        <div class="xs:text-sm md:text-base mt-2">
          Our Penetration Testing services will attempt to exploit the
          vulnerabilites in your system to determine whether unauthorized access
          or other malicious activity is possible
        </div>
      </div>
      <div class="flex justify-center xs:w-11/12 md:w-1/3">
        <img
          data-src="/icons/va-pt.png"
          alt="Vulnerability Analysis Penetration Testing VA/PT VA-PT"
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
