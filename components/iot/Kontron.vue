<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <!-- <div
      class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    > -->
    <div
      class="flex flex-col-reverse sm:flex-row rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6 sm:w-1/2">
        <div class="font-semibold text-lg mb-2">
          Kontron
        </div>
        <div>
          Kontron is a global leader in embedded computing technology (ECT). As
          a part of technology group S&amp;T, Kontron offers a combined
          portfolio of secure hardware, middleware and services for Internet of
          Things (IoT) and Industry 4.0 applications. With its standard products
          and tailor-made solutions based on highly reliable state-of-the-art
          embedded technologies, Kontron provides secure and innovative
          applications for a variety of industries
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center content-center sm:w-1/2"
      >
        <img
          height="200"
          width="400"
          data-src="/partner-logos/kontron.png"
          alt="Kontron"
          class="lazyload"
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
