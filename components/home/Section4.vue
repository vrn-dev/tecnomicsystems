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
          <img src="~/assets/customer-logos/microsoft.png" alt="Microsoft" />
          <img src="~/assets/customer-logos/citi.png" alt="CitiBank" />
          <img
            src="~/assets/customer-logos/nus.png"
            alt="National University of Singapore"
          />
          <img src="~/assets/customer-logos/adcb.png" alt="ADCB" />
          <img src="~/assets/customer-logos/maxis.png" alt="Maxis" />
          <img src="~/assets/customer-logos/marriot.png" alt="Marriott" />
          <img src="~/assets/customer-logos/etihad.png" alt="Etihad" />
          <img src="~/assets/customer-logos/ey.png" alt="Ernst &amp; Young" />
          <img src="~/assets/customer-logos/exxon.png" alt="ExxonMobil" />
          <img src="~/assets/customer-logos/vodafone.png" alt="Vodafone" />
          <img src="~/assets/customer-logos/airtel.png" alt="Airtel" />
          <img src="~/assets/customer-logos/ooredoo.png" alt="Ooredoo" />
          <img src="~/assets/customer-logos/axa.png" alt="Axa Insurance" />
          <img src="~/assets/customer-logos/ais.png" alt="AIS" />
          <img
            src="~/assets/customer-logos/credit-suisse.png"
            alt="Credit Suisse"
          />
          <img src="~/assets/customer-logos/allianz.png" alt="Allianz" />
          <img
            src="~/assets/customer-logos/software-ag.png"
            alt="Software AG"
          />
          <img src="~/assets/customer-logos/yokogawa.png" alt="Yokogawa" />
          <img src="~/assets/customer-logos/thuraya.png" alt="Thuraya" />
          <img src="~/assets/customer-logos/rci.png" alt="RCI" />
          <img src="~/assets/customer-logos/st-engg.png" alt="ST Engineering" />
          <img src="~/assets/customer-logos/keppel.png" alt="Keppel" />
          <img src="~/assets/customer-logos/razer.png" alt="Razer" />
          <img
            src="~/assets/customer-logos/landmark.png"
            alt="Landmark Group"
          />
          <img src="~/assets/customer-logos/sompo.png" alt="Sompo" />
          <img
            src="~/assets/customer-logos/srta.jpg"
            alt="Sharjah Roads &amp; Transport Authority"
          />
          <img src="~/assets/customer-logos/ericsson.png" alt="Ericsson" />
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
