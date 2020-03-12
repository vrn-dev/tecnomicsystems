<template>
  <div class="container bg-blue-200">
    <intersect @enter="section1 = true" @leave="section1 = false">
      <div>
        <div
          class="flex justify-center flex-wrap mt-10"
          :class="section1 ? 'fade-in-bottom' : ''"
        >
          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40 lazyload"
                data-src="/icons/building-blocks.png"
                alt="Telecom Building Blocks"
              />
            </div>
            <h2 class="subtitle-2">Telecom Building Blocks</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40 lazyload"
                data-src="/icons/cyber-security.png"
                alt="Cyber Security"
              />
            </div>
            <h2 class="subtitle-2">Cyber Security</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40 lazyload"
                data-src="/icons/unified-communications.png"
                alt="Unified Communications"
              />
            </div>
            <h2 class="subtitle-2">Unified Communications</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40 lazyload" data-src="/icons/iot.png" alt="IoT" />
            </div>
            <h2 class="subtitle-2">IoT</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40 lazyload"
                data-src="/icons/contact-center-headphones.png"
                alt="Contact Center"
              />
            </div>
            <h2 class="subtitle-2">Contact Center &amp; BI</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40 lazyload"
                data-src="/icons/services.png"
                alt="Professional Services"
              />
            </div>
            <h2 class="subtitle-2">Professional Services</h2>
          </div>
        </div>
      </div>
    </intersect>
  </div>
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
