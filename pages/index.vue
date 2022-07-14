<script setup lang="ts">
const butter = useButter();
const sections = {
  "lp-hero": resolveComponent("LpHero"),
  "lp-features": resolveComponent("LpFeatures"),
  "lp-two_column_with_image": resolveComponent("LpAbout"),
  "lp-testimonials": resolveComponent("LpTestimonials"),
};
const samplePage = await butter.getLandingPage()
useHead({
  title: samplePage.value.fields.seo.title,
  meta: [
    { name: "description", content: samplePage.value.fields.seo.description },
  ],
});
</script>
<template>
  <TheNavBar />
  <component
    v-for="field in samplePage.fields.body"
    :is="sections[`lp-${field.type}`]"
    v-bind="field.fields"
  ></component>
  <TheFooter />
</template>
