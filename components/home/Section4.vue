<template>
  <div class="container bg-blue-100">
    <intersect @enter="section1 = true" @leave="section1 = false">
      <div>
        <div class="flex justify-center subtitle">
          <h1>Our Clients</h1>
        </div>

        <div
          class="grid sm:grid-cols1 md:grid-cols-3 xl:grid-cols-4 gap-16 p-16"
          :class="section1 ? 'fade-in-bottom' : ''"
        >
          <img src="~/assets/customer-logos/microsoft.png" alt="" />
          <img src="~/assets/customer-logos/citi.png" alt="" />
          <img src="~/assets/customer-logos/nus.png" alt="" />
          <img src="~/assets/customer-logos/adcb.png" alt="" />
          <img src="~/assets/customer-logos/maxis.png" alt="" />
          <img src="~/assets/customer-logos/marriot.png" alt="" />
          <img src="~/assets/customer-logos/etihad.png" alt="" />
          <img src="~/assets/customer-logos/ey.png" alt="" />
          <img src="~/assets/customer-logos/exxon.png" alt="" />
          <img src="~/assets/customer-logos/vodafone.png" alt="" />
          <img src="~/assets/customer-logos/airtel.png" alt="" />
          <img src="~/assets/customer-logos/ooredoo.png" alt="" />
          <img src="~/assets/customer-logos/axa.png" alt="" />
          <img src="~/assets/customer-logos/ais.png" alt="" />
          <img src="~/assets/customer-logos/credit-suisse.png" alt="" />
          <img src="~/assets/customer-logos/allianz.png" alt="" />
          <img src="~/assets/customer-logos/software-ag.png" alt="" />
          <img src="~/assets/customer-logos/yokogawa.png" alt="" />
          <img src="~/assets/customer-logos/thuraya.png" alt="" />
          <img src="~/assets/customer-logos/rci.png" alt="" />
          <img src="~/assets/customer-logos/st-engg.png" alt="" />
          <img src="~/assets/customer-logos/keppel.png" alt="" />
          <img src="~/assets/customer-logos/razer.png" alt="" />
          <img src="~/assets/customer-logos/landmark.png" alt="" />
          <img src="~/assets/customer-logos/sompo.png" alt="" />
          <img src="~/assets/customer-logos/srta.jpg" alt="" />
          <img src="~/assets/customer-logos/ericsson.png" alt="" />
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
