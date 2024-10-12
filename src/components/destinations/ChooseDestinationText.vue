<script setup lang="ts">
import { $destination } from "@/i18n/translations";
import { useStore } from "@nanostores/vue";

const destinations = useStore($destination);
</script>

<template>
  <div
    class="text-preset-6 md:text-preset-5 font-barlow-condensed flex w-full flex-row items-center justify-center gap-6 text-center text-base uppercase tracking-[0.15rem] md:justify-start md:text-left md:text-xl xl:text-[1.75rem]"
  >
    <span class="opacity-25">01</span>
    <span>{{ destinations.pick }}</span>
  </div>
</template>
