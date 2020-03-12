<template>
  <div>
    <div class="flex ml-10">
      <button
        class="block rounded-full border border-purple-700 p-3 hover:border-pink-600"
        @click="isOpen = !isOpen"
      >
        <div class="flex">
          <img
            class="lazyload"
            alt="Search Icon"
            data-src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMjcgMjQuNTdsLTUuNjQ3LTUuNjQ4YTguODk1IDguODk1IDAgMCAwIDEuNTIyLTQuOTg0QzIyLjg3NSA5LjAxIDE4Ljg2NyA1IDEzLjkzOCA1IDkuMDEgNSA1IDkuMDEgNSAxMy45MzhjMCA0LjkyOSA0LjAxIDguOTM4IDguOTM4IDguOTM4YTguODg3IDguODg3IDAgMCAwIDQuOTg0LTEuNTIyTDI0LjU2OCAyNyAyNyAyNC41N3ptLTEzLjA2Mi00LjQ0NWE2LjE5NCA2LjE5NCAwIDAgMS02LjE4OC02LjE4OCA2LjE5NSA2LjE5NSAwIDAgMSA2LjE4OC02LjE4OCA2LjE5NSA2LjE5NSAwIDAgMSA2LjE4OCA2LjE4OCA2LjE5NSA2LjE5NSAwIDAgMS02LjE4OCA2LjE4OHoiLz48L3N2Zz4="
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
          class="lazyload"
          alt="Cancel Icon"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNNy4wMDQgMjMuMDg3bDcuMDgtNy4wODEtNy4wNy03LjA3MUw4LjkyOSA3LjAybDcuMDY3IDcuMDY5TDIzLjA4NCA3bDEuOTEyIDEuOTEzLTcuMDg5IDcuMDkzIDcuMDc1IDcuMDc3LTEuOTEyIDEuOTEzLTcuMDc0LTcuMDczTDguOTE3IDI1eiIvPjwvc3ZnPg=="
        />
      </button>
      <a :class="chipClass" @click="emitRef('tbb')">Telecom Building Blocks</a>
      <a :class="chipClass" @click="emitRef('sbc')">Unified Communications</a>
      <a :class="chipClass" @click="emitRef('cc')">Contact Center</a>
      <a :class="chipClass" @click="emitRef('gateways')">Gateways</a>
      <a :class="chipClass" @click="emitRef('sbc')"
        >Session Border Controllers</a
      >
      <a :class="chipClass" @click="emitRef('pbx')">IP PBX</a>
      <a :class="chipClass" @click="emitRef('gateways')">Voice Cards</a>
      <a :class="chipClass" @click="emitRef('gateways')">SS7</a>
      <a :class="chipClass" @click="emitRef('peripherals')">Peripherals</a>

      <a :class="chipClass" @click="emitRef('ps')">Professional Services</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    chipClass:
      'border border-purple-700 p-5 m-10 font-semibold hover:bg-purple-300 rounded-full',
    isOpen: false
  }),
  methods: {
    emitRef(refName) {
      this.$emit('refName', refName);
      this.isOpen = false;
    }
  }
};
</script>

<style></style>
