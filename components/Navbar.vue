<template>
  <header
    class="bg-gray-200 opacity-100 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <img
          class="h-16"
          src="~/assets/images/tecnomic_vector.png"
          alt="Tecnomic Logo"
        />
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="block text-purple-500 hover:text-pink-500 focus:text-pink-500 focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <nuxt-link
        to="/"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:text-purple-800"
        >Home</nuxt-link
      >
      <nuxt-link
        to="/about"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:text-purple-800"
        >About</nuxt-link
      >
      <nuxt-link
        to="/security"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:text-purple-800"
        >Security</nuxt-link
      >
      <nuxt-link
        to="/telecom"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:text-purple-800"
        >Telecom</nuxt-link
      >
      <nuxt-link
        to="/#"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:text-purple-800"
        >Partners</nuxt-link
      >
      <nuxt-link
        to="/#"
        class="block px-2 py-1 text-gray-800 font-semibold rounded hover:text-purple-800"
        >Contact</nuxt-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  })
};
</script>

<style></style>
