<template>
  <intersect @enter="section1 = true" @leave="section1 = false">
    <div
      class="flex flex-col items-center xs:w-11/12 xs:p-5 md:p-10 md:w-2/3 mt-5 rounded-lg border border-purple-600"
      :class="section1 ? 'fade-in-bottom' : ''"
    >
      <div class="flex-col justify-center p-6">
        <div class="font-semibold text-lg mb-2">
          Professional Services
        </div>
        <div class="xs:text-sm md:text-base">
          Tecnomic has a team of highly skilled Engineers for development
          support, field application installation and maintenance. We provide
          support services in design, integration, deployment and Maintenance
          across a wide spectrum of security, telecom and industrial
          applications. We understand the business goals of our customers,
          thereby committing to support their businesses with highest level of
          diligence, excellence and urgency.
        </div>
        <div class="mt-2 xs:text-sm md:text-base">
          We study to understand client’s business models and objectives to
          develop tailor-made Professional Services plan to help accomplish the
          defined goals. We carry a track record of success in Integrating,
          Deploying &amp; Managing large and small voice, video and data
          networks across a myriad of market segments. We can customize the
          services for 24X7 supports to service providers, enterprise
          applications, campus networks, OEM partners. We understand the need
          for highest level of support in telecom &amp; carrier grade products,
          and help to realize seamless error-free integration and best-in-class
          service. We provide a flexible suite of options for network and
          security design, configuration, interoperability testing,
          implementation and management, as well as on-going technical training
          and maintenance to ensure the highest possible ROI.
        </div>
        <div class="mt-2 xs:text-sm md:text-base">
          &bull;&nbsp;Design Services
        </div>
        <div class="mt-2 xs:text-sm md:text-base">
          &bull;&nbsp;Development Support
        </div>
        <div class="mt-2 xs:text-sm md:text-base">
          &bull;&nbsp;Implementation and Deployment
        </div>
        <div class="mt-2 xs:text-sm md:text-base">
          &bull;&nbsp;Technical Training
        </div>
        <div class="mt-2 xs:text-sm md:text-base">
          &bull;&nbsp;Maintenance Contracts
        </div>
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
