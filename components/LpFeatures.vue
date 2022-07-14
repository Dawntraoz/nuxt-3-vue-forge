<script setup lang="ts">
interface Feature {
  headline: string;
  description: string;
  icon: string;
}

defineProps<{
  headline: string;
  subheadline: string;
  features: Feature[],
  section_name: string;
}>()
</script>

<template>
  <section id="features" class="py-10">
    <div class="container">
      <header>
        <h2 class="text-2xl font-bold text-black text-center max-w-2xl mx-auto pb-12">
          {{ subheadline }}
        </h2>
      </header>
      <div class="grid grid-cols-2 mx-auto max-w-2xl gap-4">
        <div v-for="feature in features" :key="feature.headline" class="flex flex-col gap-y-4 bg-lime-300 text-black py-6 px-8 rounded-3xl">
          <h4 class="text-xl font-bold">
            {{feature.headline}}
          </h4>
          <p>
            {{feature.description}}
          </p>
          <figure
            class="ml-auto h-16 w-16"
          >
            <img :src="feature.icon" :alt="feature.headline">
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>