<template>
  <footer
    class="bg-gray-200 min-w-full sm:justify-center sm:items-center sm:px-4 sm:py-3 "
  >
    <div class="flex-col">
      <div class="flex items-center justify-center px-4 py-3 sm:p-0">
        Tecnomic Systems Pte. Ltd. &copy; 2020. All Rights Reserved
      </div>
      <div class="flex flex-wrap items-center justify-center px-4 py-3 sm:p-0">
        <div>Singapore</div>
        <div class="text-pink-500">&nbsp;|&nbsp;</div>
        <div>Malaysia</div>
        <div class="text-pink-500">&nbsp;|&nbsp;</div>
        <div>Indonesia</div>
        <div class="text-pink-500">&nbsp;|&nbsp;</div>
        <div>Thailand</div>
        <div class="text-pink-500">&nbsp;|&nbsp;</div>
        <div>India</div>
        <div class="text-pink-500">&nbsp;|&nbsp;</div>
        <div>UAE</div>
        <div class="text-pink-500">&nbsp;|&nbsp;</div>
        <div>Australia</div>
      </div>
      <div
        class="flex items-center justify-center px-4 py-3 sm:p-0 attribute-link"
      >
        <nuxt-link to="/attributes" class="text-gray-700"
          >Asset Author Attributes</nuxt-link
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  })
};
</script>

<style></style>
