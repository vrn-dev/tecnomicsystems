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
        <h1 class="text-5xl md:text-6xl">
          Tecnomic Systems
        </h1>
        <h2 class="text-2xl font-light md:text-4xl">
          Simplifying Enterprise... Securing Assets...
        </h2>
      </div>
    </div>
    <!-- counter card 200000 endpoints , 300 projects, 100000 UC users, 50 partners etc etc -->
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
  },
  head() {
    return {
      title: 'Tecnomic | Home'
    };
  }
};
</script>
