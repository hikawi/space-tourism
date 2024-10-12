<script setup lang="ts">
import { $main } from "@/i18n/translations";
import { useStore } from "@nanostores/vue";

const main = useStore($main);
</script>

<template>
  <div
    class="flex flex-col items-center p-6 text-center md:py-32 xl:h-full xl:flex-row xl:items-end xl:px-40 xl:text-left"
  >
    <div
      class="flex w-full max-w-[32rem] flex-col gap-6 xl:w-full xl:max-w-full xl:gap-4"
    >
      <h1
        class="text-preset-6 md:text-preset-5 font-barlow-condensed text-base tracking-[0.15rem] text-blue-300 md:text-[1.75rem]"
      >
        {{ main.title }}
      </h1>
      <h1 class="text-preset-1 text-[5rem] md:text-[9rem]">{{ main.space }}</h1>
      <p
        class="text-preset-9 text-[15px] leading-[180%] text-blue-300 md:text-[1rem] xl:text-[1.125rem]"
      >
        {{ main.text }}
      </p>
    </div>

    <div
      class="flex w-full items-center justify-center py-28 xl:justify-end xl:p-0"
    >
      <button
        class="text-preset-4 size-36 rounded-full bg-white text-lg uppercase text-blue-900 ring-0 duration-200 hover:text-opacity-50 hover:ring-[88px] hover:ring-white hover:ring-opacity-10 md:size-[17rem] md:text-[2rem]"
      >
        {{ main.explore }}
      </button>
    </div>
  </div>
</template>
