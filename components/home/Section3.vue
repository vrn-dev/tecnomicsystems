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
          <nuxt-link to="/telecom">
            <div class="flex-col justify-center mx-5">
              <div class="flex justify-center mb-3">
                <img
                  class="h-40 lazyload"
                  data-src="/icons/session-border-controller.png"
                  alt="Session Border Controller SBC"
                />
              </div>
              <h2 class="subtitle-2">Session Border Controllers</h2>
            </div>
          </nuxt-link>
          <nuxt-link to="/telecom">
            <div class="flex-col justify-center mx-5">
              <div class="flex justify-center mb-3">
                <img
                  class="h-40 lazyload"
                  data-src="/icons/teams.png"
                  alt="Unified Communications"
                />
              </div>
              <h2 class="subtitle-2">Unified Communications</h2>
            </div>
          </nuxt-link>

          <nuxt-link to="/telecom">
            <div class="flex-col justify-center mx-5">
              <div class="flex justify-center mb-3">
                <img
                  class="h-40 lazyload"
                  data-src="/icons/contact-center.png"
                  alt="Contact Center"
                />
              </div>
              <h2 class="subtitle-2">Contact Center Solutions</h2>
            </div>
          </nuxt-link>

          <nuxt-link to="/telecom">
            <div class="flex-col justify-center mx-5">
              <div class="flex justify-center mb-3">
                <img
                  class="h-40 lazyload"
                  data-src="/icons/recording.png"
                  alt="Recording Solutions"
                />
              </div>
              <h2 class="subtitle-2">Recording Solutions</h2>
            </div>
          </nuxt-link>
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
