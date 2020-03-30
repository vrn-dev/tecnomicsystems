<template>
  <div>
    <div class="container bg-blue-100">
      <div class="flex-col">
        <div class="flex justify-center subtitle">
          <div class="flex-col">
            <div
              class="flex items-center justify-center content-center mt-10 w-screen"
            >
              <h1 class="flex justify-center mt-5 w-11/12 md:w-2/3">
                Register for the {{ eventName }} on {{ datePipe }} {{ tzName }}
              </h1>
            </div>
            <!-- <div class="grid grid-cols-2 gap-12 mt-10"> -->
            <div
              class="flex items-center justify-center content-center mt-10 w-screen"
            >
              <div class="flex justify-center mt-5 w-11/12 md:w-2/3">
                <div
                  v-if="submitted && !sendError"
                  class="border border-purple-700 p-10 w-11/12"
                >
                  <div class="text-xl md:text-3xl">
                    Thank you for registering! We will send an invite for the
                    webinar to {{ msg.email }} shortly.
                  </div>
                </div>
                <form
                  v-else
                  @submit.prevent="sendEmail"
                  class="border border-purple-700 p-10 w-11/12"
                >
                  <!-- Name -->
                  <div class="flex justify-start">
                    <label
                      v-if="!nameError"
                      for="name"
                      class="text-xl text-left"
                      >Name*</label
                    >
                    <label
                      v-else
                      for="name"
                      class="text-xl text-left text-red-700 font-semibold"
                      >Name is Required</label
                    >
                  </div>
                  <div class="flex items-stretch">
                    <input
                      v-model="msg.name"
                      type="text"
                      name="name"
                      class="w-full text-xl p-2"
                    />
                  </div>
                  <!-- Company -->
                  <div class="flex justify-start">
                    <label
                      v-if="!companyError"
                      for="name"
                      class="text-xl text-left"
                      >Company*</label
                    >
                    <label
                      v-else
                      for="name"
                      class="text-xl text-left text-red-700 font-semibold"
                      >Company Name is Required</label
                    >
                  </div>
                  <div class="flex items-stretch">
                    <input
                      v-model="msg.company"
                      type="text"
                      name="name"
                      class="w-full text-xl p-2"
                    />
                  </div>
                  <!-- Email -->
                  <div class="flex justify-start mt-5">
                    <label
                      v-if="!emailError"
                      for="email"
                      class="text-xl text-left"
                      >Email*</label
                    >
                    <label
                      v-else
                      for="email"
                      class="text-xl text-left text-red-700 font-semibold"
                      >Email is Required</label
                    >
                  </div>
                  <div class="flex items-stretch">
                    <input
                      v-model="msg.email"
                      type="email"
                      name="email"
                      class="w-full text-xl p-2"
                    />
                  </div>
                  <!-- Phone -->
                  <div class="flex justify-start mt-5">
                    <label
                      v-if="!phoneError"
                      for="phone"
                      class="text-xl text-left"
                      >Phone*</label
                    >
                    <label
                      v-else
                      for="phone"
                      class="text-xl text-left text-red-700 font-semibold"
                      >Phone is Required</label
                    >
                  </div>
                  <div class="flex items-stretch">
                    <input
                      v-model="msg.phone"
                      type="text"
                      name="phone"
                      class="w-full text-xl p-2"
                    />
                  </div>
                  <!-- Country -->
                  <div class="flex justify-start mt-5">
                    <label
                      v-if="!countryError"
                      for="country"
                      class="text-xl text-left"
                      >Country*</label
                    >
                    <label
                      v-else
                      for="country"
                      class="text-xl text-left text-red-700 font-semibold"
                      >Country is Required</label
                    >
                  </div>
                  <div class="flex items-stretch">
                    <CountryList @country="getCountry" />
                  </div>

                  <div v-if="!submitted" class="flex justify-start mt-5">
                    <button
                      class="text-xl border border-pink-800 rounded-md px-5 py-1 bg-purple-500 text-white"
                    >
                      <p v-if="!loading">Submit</p>
                      <Loading v-else />
                    </button>
                  </div>
                  <div v-else class="flex justify-start mt-5">
                    <div class="text-xl text-pink-800">
                      Thank you!
                    </div>
                  </div>
                  <div v-if="sendError" class="flex justify-start mt-5">
                    <div class="text-xl text-pink-800">
                      An error occured while trying to send your registration!
                      Please try again later or click on this link to message us
                      directly -
                      <a
                        href="mailto:sales@tecnomic.com"
                        class="font-semibold underline"
                        >Email Us</a
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import CountryList from '~/components/CountryList.vue';
import Loading from '~/components/Loading.vue';
dayjs.extend(customParseFormat);
// import { datePipe as dp } from '~/plugins/datePipe';

export default {
  components: {
    CountryList,
    Loading
  },
  computed: {
    datePipe() {
      return dayjs(this.eventDT + this.zone, 'DDMMYYHHmmZZ').format(
        'DD MMM YY HH:mm'
      );
    },
    isValid() {
      return (
        this.msg.name &&
        this.msg.company &&
        this.msg.phone &&
        this.msg.email &&
        this.msg.country
      );
    },
    tzName() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
  },
  data: () => ({
    loading: false,
    submitted: false,
    valid: false,
    nameError: false,
    companyError: false,
    phoneError: false,
    countryError: false,
    emailError: false,
    sendError: false,
    eventName: '',
    eventDT: '',
    zone: '',
    msg: {
      name: '',
      company: '',
      email: '',
      phone: '',
      country: ''
    }
  }),
  methods: {
    // eslint-disable-next-line
    async sendEmail() {
      this.loading = true;
      if (!this.isValid) {
        if (!this.msg.name) this.nameError = true;
        if (!this.msg.company) this.companyError = true;
        if (!this.msg.phone) this.phoneError = true;
        if (!this.msg.country) this.countryError = true;
        if (!this.msg.email) this.emailError = true;
        return 0;
      } else {
        this.nameError = false;
        this.companyError = false;
        this.phoneError = false;
        this.countryError = false;
        this.emailError = false;
        this.submitted = false;
        try {
          const body = {
            name: this.msg.name,
            company: this.msg.company,
            email: this.msg.email,
            phone: this.msg.phone,
            country: this.msg.country
          };
          console.log(body);
          await this.$axios.post(
            'https://us-central1-tecnomic-systems-web.cloudfunctions.net/sendNueraWebinarMail',
            body
          );
          this.submitted = true;
        } catch (error) {
          // eslint-disable-next-line
          console.error(error);
          this.sendError = true;
        } finally {
          this.loading = false;
          this.submitted = true;
        }
      }
    },
    getCountry(val) {
      this.msg.country = val;
    }
  },
  created() {
    this.eventName = this.$route.query.event;
    this.eventDT = this.$route.query.dt;
    const zSplit = this.$route.query.z.split('');
    if (zSplit[0] === 'p') zSplit[0] = '+';
    else if (zSplit[0] === 'm') zSplit[0] = '-';
    this.zone = zSplit.join('');
  },
  head() {
    return {
      title: 'Event Registration Page',
      meta: [
        {
          name: 'robots',
          content: 'none, noarchive, nosnippet, noimageindex'
        }
      ]
    };
  }
};
</script>

<style></style>
