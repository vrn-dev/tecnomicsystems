<template>
  <div class="container bg-blue-200">
    <intersect @enter="section1 = true" @leave="section1 = false">
      <div>
        <div class="flex justify-center subtitle">
          <h1>Telecom</h1>
        </div>
        <div
          class="flex justify-center flex-wrap mt-10"
          :class="section1 ? 'fade-in-bottom' : ''"
        >
          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/icons/sbc.png" alt="" />
            </div>
            <h2 class="subtitle-2">Session Border Controllers</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/icons/teams.png" alt="" />
            </div>
            <h2 class="subtitle-2">Unified Communications</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img
                class="h-40"
                src="~/assets/icons/contact-center.png"
                alt=""
              />
            </div>
            <h2 class="subtitle-2">Contact Center Solutions</h2>
          </div>

          <div class="flex-col justify-center mx-5">
            <div class="flex justify-center mb-3">
              <img class="h-40" src="~/assets/icons/recording.png" alt="" />
            </div>
            <h2 class="subtitle-2">Recording Solutions</h2>
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
