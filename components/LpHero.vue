<script setup lang="ts">
defineProps<{
  headline: string;
  subheadline: string;
  button_label: string;
  button_url: string;
  image: string;
}>()
</script>

<template>
  <section id="home" class="container py-16 px-8 md:px-12 text-center my-6 bg-lime-300 rounded-3xl">
    <div class="max-w-2xl mx-auto">
      <h1 class="font-bold text-4xl pb-8">{{ headline }}</h1>
      <p class="text-sm pb-8">{{ subheadline }}</p>
      <img src="assets/images/hero/brand.svg" class="mx-auto w-64 mb-8 invert" alt="image" />
      <a :href="button_url" class="inline-flex items-center justify-center rounded-3xl bg-black py-3 px-6 text-center text-base font-medium text-white">
        {{ button_label }}
      </a>
    </div>
  </section>
</template>