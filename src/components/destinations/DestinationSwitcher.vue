<script setup lang="ts">
import imageEuropa from "@/assets/destination/image-europa.webp";
import imageMars from "@/assets/destination/image-mars.webp";
import imageMoon from "@/assets/destination/image-moon.webp";
import imageTitan from "@/assets/destination/image-titan.webp";
import { $destination } from "@/i18n/translations";
import { useStore } from "@nanostores/vue";
import { ref } from "vue";
import DestinationSelect from "./DestinationSelect.vue";

const dest = ref(0);
const images = [imageMoon, imageMars, imageEuropa, imageTitan];
const alts = ["moon", "mars", "europa", "titan"];

const tl = useStore($destination);
</script>

<template>
  <div class="flex flex-col items-center gap-8 xl:mt-20 xl:flex-row">
    <div class="flex h-full w-full items-center justify-center p-6">
      <img
        :src="images[dest].src"
        :alt="(tl as any)[alts[dest]]"
        class="mx-auto size-[12rem] object-contain md:size-[24rem] xl:w-[33rem]"
      />
    </div>

    <div
      class="mt-8 flex flex-col items-center justify-center gap-6 text-center md:max-w-[32.125rem] xl:w-full xl:max-w-full xl:gap-10 xl:text-left"
    >
      <DestinationSelect v-model="dest" />

      <div class="flex flex-col gap-4">
        <h1
          class="text-preset-2 text-[3.5rem] uppercase leading-none md:text-[5rem] xl:text-[6rem]"
        >
          {{ (tl as any)[alts[dest]] }}
        </h1>
        <p
          class="text-preset-9 text-center text-[15px] text-blue-300 md:text-base xl:text-left xl:text-lg"
        >
          {{ (tl as any)[alts[dest] + "Description"] }}
        </p>
      </div>

      <hr class="h-px w-full rounded-full border-white border-opacity-25" />

      <div
        class="flex w-full flex-col items-center justify-center gap-6 md:flex-row"
      >
        <div class="flex w-full flex-col gap-3">
          <h2 class="text-preset-7 leading-none text-blue-300">
            {{ tl.distance }}
          </h2>
          <span class="text-preset-6 uppercase leading-none">{{
            (tl as any)[alts[dest] + "Distance"]
          }}</span>
        </div>

        <div class="flex w-full flex-col gap-3">
          <h2 class="text-preset-7 leading-none text-blue-300">
            {{ tl.travel }}
          </h2>
          <span class="text-preset-6 uppercase leading-none">{{
            (tl as any)[alts[dest] + "Travel"]
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
