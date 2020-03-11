<template>
  <div>
    <div class="container bg-blue-100">
      <div class="flex flex-col">
        <h1 class="subtitle">Security</h1>

        <Quicklook @refName="scrollToAnchor" />

        <main class="flex flex-col justify-center items-center content-center">
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
        </main>
        <div class="spacer-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Quicklook from '~/components/security/Quicklook.vue';
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
    Quicklook,
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

<style></style>
