<template>
  <div class="container bg-blue-100">
    <intersect @enter="section1 = true" @leave="section1 = false">
      <div>
        <div class="flex justify-center subtitle">
          <h1>Security</h1>
        </div>
        <div
          class="flex justify-center flex-wrap mt-10"
          :class="section1 ? 'fade-in-bottom' : ''"
        >
          <nuxt-link to="/security">
            <div class="flex-col justify-center mx-5">
              <div class="flex justify-center mb-3">
                <img class="h-40" src="~/assets/icons/casb1.png" alt="CASB" />
              </div>
              <h2 class="subtitle-2">
                Cloud Access
              </h2>
              <h2 class="subtitle-2">
                Security Broker (CASB)
              </h2>
            </div>
          </nuxt-link>

          <nuxt-link to="/security">
            <div class="flex-col justify-center mx-5">
              <div class="flex justify-center mb-3">
                <img
                  class="h-40"
                  src="~/assets/icons/data-classification.png"
                  alt="Data Classification"
                />
              </div>
              <h2 class="subtitle-2">Data Classification</h2>
            </div>
          </nuxt-link>

          <nuxt-link to="/security">
            <div class="flex-col justify-center mx-5">
              <div class="flex justify-center mb-3">
                <img class="h-40" src="~/assets/icons/dlp.png" alt="DLP" />
              </div>
              <h2 class="subtitle-2">Data Loss Prevention</h2>
            </div></nuxt-link
          >

          <nuxt-link to="/security">
            <div class="flex-col justify-center mx-5">
              <div class="flex justify-center mb-3">
                <img
                  class="h-40"
                  src="~/assets/icons/threat-protection.png"
                  alt="Threat Protection"
                />
              </div>
              <h2 class="subtitle-2">Threat Protection</h2>
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
