<template>
  <div>
    <div class="container bg-blue-100">
      <div>
        <div class="flex justify-center">
          <img
            class="h-40 lazyload"
            data-src="/images/tecnomic_vector.png"
            alt="Tecnomic Logo"
          />
        </div>
        <h1 class="title">
          Tecnomic Systems
        </h1>
        <h2 class="subtitle">
          Simplifying Enterprise
        </h2>
      </div>
    </div>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </div>
</template>

<script>
import Section1 from '~/components/home/Section1.vue';
import Section2 from '~/components/home/Section2.vue';
import Section3 from '~/components/home/Section3.vue';
import Section4 from '~/components/home/Section4.vue';
export default {
  components: {
    Section1,
    Section2,
    Section3,
    Section4
  }
};
</script>
