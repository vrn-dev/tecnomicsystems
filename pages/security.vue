<template>
  <div>
    <div class="container bg-blue-100">
      <div class="flex flex-col">
        <div class="subtitle">Security</div>

        <div class="flex ml-10">
          <button
            class="block rounded-full border border-purple-700 p-3 hover:border-pink-600"
            @click="isOpen = !isOpen"
          >
            <div class="flex">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMjcgMjQuNTdsLTUuNjQ3LTUuNjQ4YTguODk1IDguODk1IDAgMCAwIDEuNTIyLTQuOTg0QzIyLjg3NSA5LjAxIDE4Ljg2NyA1IDEzLjkzOCA1IDkuMDEgNSA1IDkuMDEgNSAxMy45MzhjMCA0LjkyOSA0LjAxIDguOTM4IDguOTM4IDguOTM4YTguODg3IDguODg3IDAgMCAwIDQuOTg0LTEuNTIyTDI0LjU2OCAyNyAyNyAyNC41N3ptLTEzLjA2Mi00LjQ0NWE2LjE5NCA2LjE5NCAwIDAgMS02LjE4OC02LjE4OCA2LjE5NSA2LjE5NSAwIDAgMSA2LjE4OC02LjE4OCA2LjE5NSA2LjE5NSAwIDAgMSA2LjE4OCA2LjE4OCA2LjE5NSA2LjE5NSAwIDAgMS02LjE4OCA2LjE4OHoiLz48L3N2Zz4="
              />
              <div class="font-semibold">Quicklook</div>
            </div>
          </button>
        </div>

        <div
          v-if="isOpen"
          class="flex flex-wrap  mx-5 overflow-auto bg-purple-300 shadow-xl rounded-lg relative slide-in-top"
          :class="isOpen ? '' : 'slide-out-top'"
        >
          <button class="absolute right-0 top-0 m-5" @click="isOpen = false">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNNy4wMDQgMjMuMDg3bDcuMDgtNy4wODEtNy4wNy03LjA3MUw4LjkyOSA3LjAybDcuMDY3IDcuMDY5TDIzLjA4NCA3bDEuOTEyIDEuOTEzLTcuMDg5IDcuMDkzIDcuMDc1IDcuMDc3LTEuOTEyIDEuOTEzLTcuMDc0LTcuMDczTDguOTE3IDI1eiIvPjwvc3ZnPg=="
            />
          </button>
          <a :class="chipClass" @click="scrollToAnchor('casb')">CASB</a>
          <a :class="chipClass" @click="scrollToAnchor('dlp')">DLP</a>
          <a :class="chipClass" @click="scrollToAnchor('dataClassification')"
            >Data Classification</a
          >
          <a :class="chipClass" @click="scrollToAnchor('bas')"
            >Breach Attack Simulation</a
          >
          <a :class="chipClass" @click="scrollToAnchor('siem')">SIEM</a>
          <a :class="chipClass" @click="scrollToAnchor('threatManagement')"
            >Threat Management</a
          >
          <a :class="chipClass" @click="scrollToAnchor('accessManangement')"
            >Access Management</a
          >
          <a :class="chipClass" @click="scrollToAnchor('endpoint')"
            >Endpoint Security</a
          >
          <a :class="chipClass" @click="scrollToAnchor('enterpriseMobility')"
            >Enterprise Mobility</a
          >
          <a :class="chipClass" @click="scrollToAnchor('brandProtection')"
            >Brand Monitoring &amp; Protection</a
          >
          <a :class="chipClass" @click="scrollToAnchor('csa')"
            >Current State Assessment</a
          >
          <a :class="chipClass" @click="scrollToAnchor('compromiseAssessment')"
            >Compromise Assessment</a
          >
          <a :class="chipClass" @click="scrollToAnchor('networkForensics')"
            >Network Forensics</a
          >
          <a :class="chipClass" @click="scrollToAnchor('securityScoring')"
            >Security Scoring</a
          >
          <a :class="chipClass" @click="scrollToAnchor('vapt')">VA/PT</a>
          <a :class="chipClass" @click="scrollToAnchor('soc')">SoC</a>
          <a :class="chipClass" @click="scrollToAnchor('ngnFirewall')"
            >NGN Firewall</a
          >
          <a :class="chipClass" @click="scrollToAnchor('waf')">WAF</a>
          <a :class="chipClass" @click="scrollToAnchor('webEmailProtection')"
            >Web &amp; Email Protection</a
          >
          <a :class="chipClass" @click="scrollToAnchor('wirelessProtection')"
            >Wireless Protection</a
          >
          <a
            :class="chipClass"
            @click="scrollToAnchor('fileIntegrityManagement')"
            >File Integrity Management</a
          >
          <a :class="chipClass" @click="scrollToAnchor('encryption')"
            >Encryption</a
          >
          <a
            :class="chipClass"
            @click="scrollToAnchor('informationRightsManagement')"
            >Information Rights Management</a
          >
          <a :class="chipClass" @click="scrollToAnchor('cyberEmergency')"
            >Cyber Emergency</a
          >
          <a :class="chipClass" @click="scrollToAnchor('grc')">GRC</a>
          <a :class="chipClass" @click="scrollToAnchor('networkIntrusion')"
            >Network Intrusion Prevention</a
          >
          <a :class="chipClass" @click="scrollToAnchor('securityArchitecture')"
            >Security Architecture Advisory</a
          >
          <a :class="chipClass" @click="scrollToAnchor('implementationSevices')"
            >Implementation Services</a
          >
          <a :class="chipClass" @click="scrollToAnchor('trainingServices')"
            >Training Services</a
          >
        </div>

        <div class="flex flex-col justify-cente items-center content-center">
          <CASB ref="casb" />
          <DLP ref="dlp" />
          <DataClassification ref="dataClassification" />
          <BreachAttack ref="bas" />
          <SIEM ref="siem" />
          <ThreatManagement ref="threatManagement" />
          <AccessManagement ref="accessManangement" />
          <PrivilegeManagement ref="privilegeManagement" />
          <Endpoint ref="endpoint" />
          <EnterpriseMobility ref="enterpriseMobility" />
          <BrandProtection ref="brandProtection" />
          <CSA ref="csa" />
          <CompromiseAssessment ref="compromiseAssessment" />
          <NetworkForensics ref="networkForensics" />
          <SecurityScoring ref="securityScoring" />
          <VaPt ref="vapt" />
          <SoC ref="soc" />
          <NgnFirewall ref="ngnFirewall" />
          <WAF ref="waf" />
          <WebEmailProtection ref="webEmailProtection" />
          <WirelessProtection ref="wirelessProtection" />
          <FileIntegrityManagement ref="fileIntegrityManagement" />
          <Encryption ref="encryption" />
          <InformationRightsManagement ref="informationRightsManagement" />
          <CyberEmergency ref="cyberEmergency" />
          <GRC ref="grc" />
          <NetworkIntrusion ref="networkIntrusion" />
          <SecurityArchitecture ref="securityArchitecture" />
          <ImplementationServices ref="implementationSevices" />
          <TrainingServices ref="trainingServices" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CASB from '~/components/security/CASB.vue';
import DLP from '~/components/security/DLP.vue';
import AccessManagement from '~/components/security/AccessManagement.vue';
import BrandProtection from '~/components/security/BrandProtection.vue';
import BreachAttack from '~/components/security/BreachAttack.vue';
import CompromiseAssessment from '~/components/security/CompromiseAssessment.vue';
import CSA from '~/components/security/CSA.vue';
import CyberEmergency from '~/components/security/CyberEmergency.vue';
import DataClassification from '~/components/security/DataClassification.vue';
import Encryption from '~/components/security/Encryption.vue';
import Endpoint from '~/components/security/Endpoint.vue';
import EnterpriseMobility from '~/components/security/EnterpriseMobility.vue';
import FileIntegrityManagement from '~/components/security/FileIntegrityManagement.vue';
import GRC from '~/components/security/GRC.vue';
import ImplementationServices from '~/components/security/ImplementationServices.vue';
import InformationRightsManagement from '~/components/security/InformationRightsManagement.vue';
import NetworkForensics from '~/components/security/NetworkForensics.vue';
import NetworkIntrusion from '~/components/security/NetworkIntrusion.vue';
import NgnFirewall from '~/components/security/NgnFirewall.vue';
import PrivilegeManagement from '~/components/security/PrivilegeManagement.vue';
import SecurityScoring from '~/components/security/SecurityScoring.vue';
import SecurityArchitecture from '~/components/security/SecurityArchitecture.vue';
import SIEM from '~/components/security/SIEM.vue';
import SoC from '~/components/security/SoC.vue';
import ThreatManagement from '~/components/security/ThreatManagement.vue';
import TrainingServices from '~/components/security/TrainingServices.vue';
import VaPt from '~/components/security/VaPt.vue';
import WAF from '~/components/security/WAF.vue';
import WebEmailProtection from '~/components/security/WebEmailProtection.vue';
import WirelessProtection from '~/components/security/WirelessProtection.vue';

export default {
  components: {
    CASB,
    DLP,
    AccessManagement,
    BrandProtection,
    BreachAttack,
    CompromiseAssessment,
    CSA,
    CyberEmergency,
    DataClassification,
    Encryption,
    Endpoint,
    EnterpriseMobility,
    FileIntegrityManagement,
    GRC,
    ImplementationServices,
    InformationRightsManagement,
    NetworkForensics,
    NetworkIntrusion,
    NgnFirewall,
    PrivilegeManagement,
    SecurityScoring,
    SecurityArchitecture,
    SIEM,
    SoC,
    ThreatManagement,
    TrainingServices,
    VaPt,
    WAF,
    WebEmailProtection,
    WirelessProtection
  },
  data: () => ({
    chipClass:
      'border border-purple-700 p-5 m-10 font-semibold hover:bg-purple-300 rounded-full',
    isOpen: false
  }),
  methods: {
    scrollToAnchor(refName) {
      const el = this.$refs[refName];
      el.$el.scrollIntoView({ behaviour: 'smooth' });
      this.isOpen = false;
    }
  }
};
</script>

<style>
.slide-in-top {
  -webkit-animation: slide-in-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-out-top {
  -webkit-animation: slide-out-top 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-top 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2020-3-5 21:5:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
</style>
