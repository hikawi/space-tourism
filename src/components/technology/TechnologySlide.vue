<script setup lang="ts">
import launchLandscape from "@/assets/technology/image-launch-vehicle-landscape.jpg";
import launchPortrait from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "@/assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "@/assets/technology/image-space-capsule-portrait.jpg";
import spaceLandscape from "@/assets/technology/image-spaceport-landscape.jpg";
import spacePortrait from "@/assets/technology/image-spaceport-portrait.jpg";
import { onMounted, onUnmounted, ref } from "vue";

const technology = [
  {
    name: "Launch vehicle",
    portrait: launchPortrait,
    landscape: launchLandscape,
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    portrait: spacePortrait,
    landscape: spaceLandscape,
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    portrait: capsulePortrait,
    landscape: capsuleLandscape,
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const index = ref(0);

function handleKeyInput(e: KeyboardEvent) {
  switch (e.key) {
    case "1":
    case "2":
    case "3":
      index.value = +e.key - 1;
      break;
    case "ArrowLeft":
      index.value--;
      if (index.value < 0) index.value += technology.length;
      break;
    case "ArrowRight":
      index.value++;
      if (index.value > technology.length) index.value = 0;
      break;
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyInput);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyInput);
});
</script>

<template>
  <div
    class="flex w-full flex-col gap-8 xl:flex-row-reverse xl:items-center xl:pl-40"
  >
    <div class="flex size-full">
      <picture class="w-full">
        <source
          :srcset="technology[index].portrait.src"
          media="(min-width: 1280px)"
        />
        <source
          :srcset="technology[index].landscape.src"
          media="(min-width: 768px)"
        />
        <img
          :src="technology[index].portrait.src"
          :alt="technology[index].name"
          class="size-full object-contain object-center"
        />
      </picture>
    </div>

    <div
      class="flex size-full flex-col items-center gap-10 p-6 pb-1 text-center xl:flex-row xl:items-center xl:gap-16 xl:text-left"
    >
      <div
        class="flex flex-row items-center justify-center gap-4 xl:flex-col xl:gap-8"
      >
        <button
          class="text-preset-4 size-10 rounded-full text-lg hover:border-white focus:border-white md:size-14 md:text-2xl xl:size-20 xl:text-[2rem]"
          :class="{
            'bg-white text-blue-900': index === i - 1,
            'border-[1px] border-white border-opacity-25 bg-transparent':
              index !== i - 1,
          }"
          @click.prevent="index = i - 1"
          v-for="i in 3"
        >
          {{ i }}
        </button>
      </div>

      <div class="flex flex-col gap-4 pb-10 xl:gap-6">
        <div class="flex flex-col gap-4">
          <h1
            class="text-preset-4 text-lg uppercase !leading-none opacity-50 md:text-2xl xl:text-[2rem]"
          >
            The terminology...
          </h1>

          <h2
            class="text-preset-3 text-2xl uppercase leading-none md:text-[2.5rem]"
          >
            {{ technology[index].name }}
          </h2>
        </div>

        <p
          class="text-preset-9 text-[15px] text-blue-300 md:text-[1rem] xl:text-[1.125rem]"
        >
          {{ technology[index].description }}
        </p>
      </div>
    </div>
  </div>
</template>
