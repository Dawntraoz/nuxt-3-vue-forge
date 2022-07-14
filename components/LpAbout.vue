<script setup lang="ts">
defineProps<{
  headline:string;
  subheadline:string;
  image:string;
  image_position:string;
  button_label:string;
  button_url:string;
  scroll_anchor_id:string;
}>()
</script>

<template>
  <section id="about" class="py-12">
    <div class="container py-16 px-24 flex flex-col items-start justify-between bg-gray-100 rounded-3xl">
      <span class="mb-6 bg-black py-2 px-4 rounded-3xl text-sm font-medium text-white">
        About
      </span>
      <h2 class="pb-6 text-3xl font-bold text-black">
        {{ headline }}
      </h2>
      <div class="prose pb-8 text-base leading-relaxed text-black" v-html="subheadline"></div>
      <a
        href="#"
        class="bg-black py-4 px-8 rounded-3xl text-sm font-medium text-white"
      >
        Learn More
      </a>
    </div>
  </section>
</template>