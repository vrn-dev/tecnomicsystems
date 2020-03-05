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
                class="h-40"
                src="~/assets/icons/building-blocks.png"
                alt=""
              />
            </div>
            <h2 class="subtitle-2">Telecom Building Blocks</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40"
                src="~/assets/icons/cyber-security.png"
                alt=""
              />
            </div>
            <h2 class="subtitle-2">Cyber Security</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/icons/uc.png" alt="" />
            </div>
            <h2 class="subtitle-2">Unified Communications</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/icons/iot.png" alt="" />
            </div>
            <h2 class="subtitle-2">IoT</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/icons/headphones.png" alt="" />
            </div>
            <h2 class="subtitle-2">Contact Center &amp; BI</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/icons/services.png" alt="" />
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
