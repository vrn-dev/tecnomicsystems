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
              <img class="h-40" src="~/assets/images/block.png" alt="" />
            </div>
            <h2 class="subtitle-2">Telecom Building Blocks</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40"
                src="~/assets/images/cyber-security.png"
                alt=""
              />
            </div>
            <h2 class="subtitle-2">Cyber Security</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/images/call.png" alt="" />
            </div>
            <h2 class="subtitle-2">Unified Communications</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/images/nano.png" alt="" />
            </div>
            <h2 class="subtitle-2">Industrial Automation</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/images/headphone.png" alt="" />
            </div>
            <h2 class="subtitle-2">Contact Center &amp; BI</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40"
                src="~/assets/images/installation-symbol.png"
                alt=""
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
