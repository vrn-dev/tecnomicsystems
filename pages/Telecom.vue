<template>
  <div>
    <div class="container bg-blue-100">
      <div class="flex flex-col">
        <div class="subtitle">Telecom</div>

        <div class="flex flex-col justify-cente items-center content-center">
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Telecom Building Blocks
                </div>
                <div>
                  We provide the Telecom platform Building blocs: Hardware,
                  Software, Application and Services as an integrated solution
                </div>
                <div class="mt-2">
                  &bull; <span class="font-bold">Service Provider</span> We work
                  closely with carriers, OEM suppliers, independent software
                  vendors to provide solutions in Telecom and Network
                  connectivity elements for access, core, CPE and value added
                  services
                </div>
                <div class="mt-2">
                  &bull;
                  <span class="font-bold">Voice Network Elements</span>
                  Media Gateways | Session Border Controllers (SBC) |
                  Transcoding | Voice Network Optimization
                </div>
                <div class="mt-2">
                  &bull;
                  <span class="font-bold">Signalling</span>
                  SS7 | SIGTRAN | SIP | BICC | WebRTC
                </div>
                <div class="mt-2">
                  &bull;
                  <span class="font-bold">Applications</span>
                  Value Added Services Platforms | Network Interconnectivity
                  Solutions
                </div>
                <div class="mt-2">
                  &bull;
                  <span class="font-bold">Telecom Platform</span>
                  PCI | ATCA | VME | CPCI
                </div>
                <div class="mt-2">
                  &bull;
                  <span class="font-bold">Services &amp; Support</span>
                  Network planning | Hardware Optimization | Deployment Services
                  | SLA
                </div>
              </div>
            </div>
          </intersect>
          <div class="border border-1 border-pink-700 w-2/3 mt-10"></div>
          <div class="subtitle mt-10">Unified Communications</div>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/audiocodes.png"
                  alt=""
                />
              </div>
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Audiocodes
                </div>
                <div>
                  Audiocodes design, manufacture and sell advanced Voice over IP
                  and converged VoIP and data networking products, applications
                  and professional services to global enterprises, medium and
                  small business, as well as to service providers globally.
                  Their extensive product range includes IP phones, session
                  border controllers (SBCs), media gateways, mobile VoIP
                  clients, multi-service business routers (MSBRs), routing
                  applications, call recording, voice dialing, and more
                </div>
              </div>
            </div>
          </intersect>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Ribbon
                </div>
                <div>
                  Ribbon Communications Inc. (Nasdaq: RBBN) delivers
                  market-leading software and hardware solutions that secure and
                  power many of the world's leading service provider and
                  enterprise communications environments. Built on world-class
                  technology and intellectual property, the company's
                  cloud-native solutions deliver intelligent and secure
                  real-time communications solutions for the cloud, network and
                  enterprise edge
                </div>
              </div>
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/ribbon.png"
                  alt=""
                />
              </div>
            </div>
          </intersect>
          <div class="border border-1 border-pink-700 w-2/3 mt-10"></div>
          <div class="subtitle mt-10">Contact Center</div>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/genesys.png"
                  alt=""
                />
              </div>
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Genesys
                </div>
                <div>
                  Genesys powers more than 25 billion of the world’s best
                  customer experiences every year. And top-industry analysts
                  agree: Genesys is the only leader in both cloud and
                  on-premises customer experience solutions. Great customer
                  experience drives great business outcomes. More than 11,000
                  companies in over 100 countries trust Genesys. That’s how we
                  became the industry’s #1 customer experience platform. Helping
                  companies deliver seamless omnichannel customer journeys and
                  build lasting relationships is what we do. From marketing, to
                  sales, to service—make every moment count.
                </div>
              </div>
            </div>
          </intersect>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Interlink
                </div>
                <div>
                  Interlink Network Systems established in the year 1991 is a
                  Telephony and Enterprise Application Integration (EAI)
                  software products and services company. Interlink’s products
                  are based on a mission critical and redundant architecture
                  that enables secure and guaranteed data/voice acquisition and
                  delivery over the LAN/WAN and the Internet. With valued
                  customers in the US, Canada, Africa, Middle East and
                  South-Asia, Interlink is committed to delivering high quality
                  products and services
                </div>
              </div>
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/interlink.png"
                  alt=""
                />
              </div>
            </div>
          </intersect>
          <div class="border border-1 border-pink-700 w-2/3 mt-10"></div>
          <div class="subtitle mt-10">
            Gateways | IP PBX | Voice Cards | SS7 | Peripherals
          </div>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/dialogic.png"
                  alt=""
                />
              </div>
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Dialogic
                </div>
                <div>
                  Dialogic is a leading cloud-optimized solutions provider for
                  real-time communications media, applications, and
                  infrastructure to service providers, enterprises, and
                  developers around the globe
                </div>
              </div>
            </div>
          </intersect>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Enghouse Interactive
                </div>
                <div>
                  Enghouse Interactive develops and supplies the widest range of
                  customer interaction management solutions on the market
                </div>
              </div>
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/enghouse.png"
                  alt=""
                />
              </div>
            </div>
          </intersect>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/sangoma.png"
                  alt=""
                />
              </div>
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Sangoma
                </div>
                <div>
                  Sangoma, is a leading voice and Unified Communications (UC)
                  solution provider, with an award-winning cloud and on-premise
                  UC PBX solutions and continuing product innovation
                </div>
              </div>
            </div>
          </intersect>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Innovaphone
                </div>
                <div>
                  Innovaphone offers: VoIP gateways, the IP Telephony system
                  Innovaphone PBX, Unified Communications solution myPBX and the
                  universal work environment Innovaphone myApps
                </div>
              </div>
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/innovaphone.png"
                  alt=""
                />
              </div>
            </div>
          </intersect>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/busylight.png"
                  alt=""
                />
              </div>
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Kuando Busylight
                </div>
                <div>
                  Less interruptions - more productivity! A do not disturb
                  presence status light is ideal for Modern open office
                  workspaces and cubicles. A Built-in speaker delivers an
                  audible call alert while flashing the light to avoid missing
                  calls. Integrates with headset, desk phone or softphone and
                  works as an on-the-phone indicator light. Supports many UC
                  platforms like, Microsoft Teams, Skype4B, Lync, Cisco Jabber,
                  RingCentral, Avaya, 3CX, Zoom &amp; more
                </div>
              </div>
            </div>
          </intersect>
          <div class="border border-1 border-pink-700 w-2/3 mt-10"></div>
          <div class="subtitle mt-10">
            IoT &amp; Industrial Automation
          </div>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/advantech.png"
                  alt=""
                />
              </div>
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Advantech
                </div>
                <div>
                  Advantech is a global leader in the fields of IoT intelligent
                  systems and embedded platforms. To embrace the trends of IoT,
                  big data, and artificial intelligence, Advantech promotes IoT
                  hardware and software solutions with the Edge Intelligence
                  WISE-PaaS core to assist business partners and clients in
                  connecting their industrial chains
                </div>
              </div>
            </div>
          </intersect>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Kontron
                </div>
                <div>
                  Kontron is a global leader in embedded computing technology
                  (ECT). As a part of technology group S&amp;T, Kontron offers a
                  combined portfolio of secure hardware, middleware and services
                  for Internet of Things (IoT) and Industry 4.0 applications.
                  With its standard products and tailor-made solutions based on
                  highly reliable state-of-the-art embedded technologies,
                  Kontron provides secure and innovative applications for a
                  variety of industries
                </div>
              </div>
              <div
                class="flex flex-col items-center justify-center content-center"
              >
                <img
                  height="200"
                  width="400"
                  src="~/assets/partner-logos/kontron.png"
                  alt=""
                />
              </div>
            </div>
          </intersect>
          <intersect @enter="section1 = true" @leave="section1 = false">
            <div
              class="rounded-lg border border-purple-600 p-10 w-2/3 mt-5"
              :class="section1 ? 'fade-in-bottom' : ''"
            >
              <div class="flex-col justify-center p-6">
                <div class="font-semibold text-lg mb-2">
                  Professional Services
                </div>
                <div class="mb-2">
                  Tecnomic has a team of highly skilled Engineers for
                  development support, field application installation and
                  maintenance. We provide support services in design,
                  integration, deployment and Maintenance across a wide spectrum
                  of security, telecom and industrial applications. We
                  understand the business goals of our customers, thereby
                  committing to support their businesses with highest level of
                  diligence, excellence and urgency.
                </div>
                <div class="mb-2">
                  We study to understand client’s business models and objectives
                  to develop tailor-made Professional Services plan to help
                  accomplish the defined goals. We carry a track record of
                  success in Integrating, Deploying &amp; Managing large and
                  small voice, video and data networks across a myriad of market
                  segments. We can customize the services for 24X7 supports to
                  service providers, enterprise applications, campus networks,
                  OEM partners. We understand the need for highest level of
                  support in telecom &amp; carrier grade products, and help to
                  realize seamless error-free integration and best-in-class
                  service. We provide a flexible suite of options for network
                  and security design, configuration, interoperability testing,
                  implementation and management, as well as on-going technical
                  training and maintenance to ensure the highest possible ROI.
                </div>
                <div class="mb-2">&bull;&nbsp;Design Services</div>
                <div class="mb-2">&bull;&nbsp;Development Support</div>
                <div class="mb-2">
                  &bull;&nbsp;Implementation and Deployment
                </div>
                <div class="mb-2">&bull;&nbsp;Technical Training</div>
                <div class="mb-2">&bull;&nbsp;Maintenance Contracts</div>
              </div>
            </div>
          </intersect>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueIntersect as Intersect } from '~/plugins/vue-intersect';

export default {
  components: {
    Intersect
  },
  data: () => ({
    chipClass:
      'border border-purple-700 p-5 m-10 font-semibold hover:bg-purple-300 rounded-full',
    section1: false
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
