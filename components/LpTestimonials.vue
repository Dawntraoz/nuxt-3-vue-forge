<script setup lang="ts">
interface Testimonial{
  quote: string;
  name: string;
  title: string;
}
defineProps<{
  headline: string;
  subheadline: string;
  section_name?: string;
  testimonial: Testimonial[]
}>();
</script>

<template>
  <section id="testimonials" class="pt-20 md:pt-[120px]">
    <div class="container px-4">
      <div class="flex flex-wrap">
        <div class="mx-4 w-full">
          <div class="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
            <span class="mb-2 block text-lg font-semibold text-primary">
              {{section_name}}
            </span>
            <h2
              class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
            >
              {{headline}}
            </h2>
            <p
              class="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
            >
              {{subheadline}}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div v-for="t in testimonial" :key="t.title" class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div
            class="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
            data-wow-delay=".1s
            "
          >
            <div class="ud-testimonial-ratings mb-3 flex items-center">
              <span class="mr-1 text-[#fbb040]">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  class="fill-current"
                >
                  <path
                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                  />
                </svg>
              </span>
              <span class="mr-1 text-[#fbb040]">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  class="fill-current"
                >
                  <path
                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                  />
                </svg>
              </span>
              <span class="mr-1 text-[#fbb040]">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  class="fill-current"
                >
                  <path
                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                  />
                </svg>
              </span>
              <span class="mr-1 text-[#fbb040]">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  class="fill-current"
                >
                  <path
                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                  />
                </svg>
              </span>
              <span class="mr-1 text-[#fbb040]">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  class="fill-current"
                >
                  <path
                    d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z"
                  />
                </svg>
              </span>
            </div>
            <div class="ud-testimonial-content mb-6">
              <p class="text-base tracking-wide text-body-color">
                “{{t.quote}}
              </p>
            </div>
            <div class="ud-testimonial-info flex items-center">
              <div
                class="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full"
              >
                <img
                  src="assets/images/testimonials/author-01.png"
                  alt="author"
                />
              </div>
              <div class="ud-testimonial-meta">
                <h4 class="text-sm font-semibold">{{t.name}}</h4>
                <p class="text-xs text-[#969696]">{{t.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>