<script setup lang="ts">
import anousheh from "@/assets/crew/image-anousheh-ansari.webp";
import douglas from "@/assets/crew/image-douglas-hurley.webp";
import mark from "@/assets/crew/image-mark-shuttleworth.webp";
import victor from "@/assets/crew/image-victor-glover.webp";
import { onMounted, onUnmounted, ref } from "vue";

const index = ref(0);
const crew = [
  {
    name: "Douglas Hurley",
    image: douglas,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: mark,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    image: victor,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    image: anousheh,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

function arrowControls(e: KeyboardEvent) {
  switch (e.key) {
    case "ArrowLeft":
      index.value = index.value - 1;
      if (index.value < 0) index.value = index.value + 4;
      break;
    case "ArrowRight":
      index.value = index.value + 1;
      if (index.value > 3) index.value = index.value - 4;
      break;
  }
}

onMounted(() => {
  document.addEventListener("keydown", arrowControls);
});

onUnmounted(() => {
  document.removeEventListener("keydown", arrowControls);
});
</script>

<template>
  <div class="flex flex-col items-center gap-8 xl:flex-row">
    <div
      class="flex w-full max-w-[32rem] flex-col justify-between gap-6 py-10 text-center xl:self-stretch xl:text-left"
    >
      <!-- Empty div -->
      <div class="hidden xl:block"></div>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2 uppercase md:gap-4">
          <h1
            class="text-preset-4 text-lg leading-none opacity-50 md:text-2xl xl:text-[2rem]"
          >
            {{ crew[index].role }}
          </h1>
          <h2
            class="text-preset-3 text-2xl leading-none md:text-[2.5rem] xl:text-[3.5rem]"
          >
            {{ crew[index].name }}
          </h2>
        </div>

        <p
          class="text-preset-9 text-[15px] text-blue-300 md:text-base xl:text-lg"
        >
          {{ crew[index].bio }}
        </p>
      </div>

      <div class="flex w-full justify-center gap-8 xl:justify-start">
        <button
          v-for="i in 4"
          class="size-3 rounded-full bg-white xl:size-[15px]"
          :class="{ 'opacity-20 hover:opacity-50': i - 1 !== index }"
          @click="index = i - 1"
          :aria-label="`Check out member #${i}`"
        />
      </div>
    </div>

    <div class="size-full min-h-[21rem] md:min-h-[25rem] xl:min-h-[35rem]">
      <img
        :src="crew[index].image.src"
        :alt="crew[index].name"
        class="size-full object-contain object-center"
      />
    </div>
  </div>
</template>
