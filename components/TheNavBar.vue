<template>
  <header class="text-black py-4 text-sm">
    <div class="container flex justify-between items-center">
      <p class="font-bold text-base flex gap-x-4">
        <span class="bg-black w-6 h-6 rounded-full"></span>
        Dawnli
      </p>
      <nav>
        <ul class="flex items-center gap-x-8">
          <li v-for="(menuItem, index) in menuItems" :key="index">
            <a :href="menuItem.url">{{ menuItem.label }}</a>
          </li>
        </ul>
      </nav>
      <a href="https://dawntraoz.com" class="border rounded-3xl py-2 px-4">Know more</a>
    </div>
  </header>
</template>

<script lang="ts" setup>
const menuItems = [
  {
    label: 'Home',
    url: '#hero'
  },
  {
    label: 'About',
    url: '#about'
  },
  {
    label: 'Features',
    url: '#features'
  },
  {
    label: "Testimonials",
    url: "#testimonials",
  },
];
</script>
