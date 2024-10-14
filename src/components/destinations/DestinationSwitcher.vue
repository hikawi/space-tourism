<script setup lang="ts">
import imageEuropa from "@/assets/destination/image-europa.webp";
import imageMars from "@/assets/destination/image-mars.webp";
import imageMoon from "@/assets/destination/image-moon.webp";
import imageTitan from "@/assets/destination/image-titan.webp";
import { ref } from "vue";
import DestinationSelect from "./DestinationSelect.vue";

const dest = ref(0);
const destinations = [
  {
    name: "Moon",
    image: imageMoon,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: imageMars,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: imageEuropa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: imageTitan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
</script>

<template>
  <div class="flex flex-col items-center gap-8 xl:mt-20 xl:flex-row">
    <div class="flex h-full w-full items-center justify-center p-6">
      <img
        :src="destinations[dest].image.src"
        :alt="destinations[dest].name"
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
          {{ destinations[dest].name }}
        </h1>
        <p
          class="text-preset-9 text-center text-[15px] text-blue-300 md:text-base xl:text-left xl:text-lg"
        >
          {{ destinations[dest].description }}
        </p>
      </div>

      <hr class="h-px w-full rounded-full border-white border-opacity-25" />

      <div
        class="flex w-full flex-col items-center justify-center gap-6 md:flex-row"
      >
        <div class="flex w-full flex-col gap-3">
          <h2 class="text-preset-7 leading-none text-blue-300">
            AVG. DISTANCE
          </h2>
          <span class="text-preset-6 uppercase leading-none">
            {{ destinations[dest].distance }}
          </span>
        </div>

        <div class="flex w-full flex-col gap-3">
          <h2 class="text-preset-7 leading-none text-blue-300">
            EST. TRAVEL TIME
          </h2>
          <span class="text-preset-6 uppercase leading-none">
            {{ destinations[dest].travel }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
