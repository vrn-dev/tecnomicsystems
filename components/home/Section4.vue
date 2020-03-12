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
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/microsoft.png"
              alt="Microsoft"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/citi.png"
              alt="CitiBank"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/nus.png"
              alt="National University of Singapore NUS"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/adcb.png"
              alt="Abu Dhabi Commercial Bank ADCB"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/maxis.png"
              alt="Maxis"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/marriot.png"
              alt="Marriott"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/etihad.png"
              alt="Etihad"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/ey.png"
              alt="Ernst &amp; Young EY"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/exxon.png"
              alt="ExxonMobil"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/vodafone.png"
              alt="Vodafone"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/airtel.png"
              alt="Airtel"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/ooredoo.png"
              alt="Ooredoo"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/axa.png"
              alt="Axa Insurance"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/ais.png"
              alt="AIS"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/credit-suisse.png"
              alt="Credit Suisse"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/allianz.png"
              alt="Allianz"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/software-ag.png"
              alt="Software AG"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/yokogawa.png"
              alt="Yokogawa"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/thuraya.png"
              alt="Thuraya"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/rci.png"
              alt="RCI"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/st-engg.png"
              alt="ST Engineering"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/keppel.png"
              alt="Keppel"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/razer.png"
              alt="Razer"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/landmark.png"
              alt="Landmark Group"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/sompo.png"
              alt="Sompo"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/srta.jpg"
              alt="Sharjah Roads &amp; Transport Authority SRTA"
            />
          </div>
          <div class="flex justify-center items-center content-center">
            <img
              class="lazyload"
              data-src="/customer-logos/ericsson.png"
              alt="Ericsson"
            />
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
