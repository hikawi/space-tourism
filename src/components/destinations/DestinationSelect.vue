<script setup lang="ts">
import { $destination } from "@/i18n/translations";
import { useStore } from "@nanostores/vue";
import { useTemplateRef } from "vue";

const alts = ["moon", "mars", "europa", "titan"];
const dest = defineModel<number>();
const tl = useStore($destination);

const destRefs = useTemplateRef<HTMLDivElement[]>("destinations");

// Custom handle key presses since we use radio groups role to accurately style
// a radio set of buttons, without the native circle thing messing everything up.
function handleKeyPress(e: KeyboardEvent, idx: number) {
  let target = idx;
  switch (e.key) {
    case "ArrowLeft":
      target--;
      if (target < 0) target += 4;
      destRefs.value?.at(target)?.focus();
      break;
    case "ArrowRight":
      target++;
      if (target > 0) target -= 4;
      destRefs.value?.at(target)?.focus();
      break;
    case "Enter":
    case "Space":
    case " ":
      destRefs.value?.at(target)?.click();
      break;
  }
}
</script>

<template>
  <div
    class="flex w-full flex-row items-center justify-center gap-8 px-9 xl:justify-start xl:px-0"
    role="radiogroup"
  >
    <div
      v-for="(choice, idx) in alts"
      class="text-preset-8 flex h-8 cursor-pointer items-start border-b-[3px] border-transparent text-center text-base uppercase tracking-[0.125rem]"
      :class="{
        'border-white': dest === idx,
        'text-blue-300 hover:border-b-white hover:border-opacity-50 hover:text-white focus:border-b-white focus:border-opacity-50':
          dest !== idx,
      }"
      role="radio"
      :aria-checked="dest === idx"
      @click.prevent="dest = idx"
      @keydown.prevent="(e) => handleKeyPress(e, idx)"
      tabindex="0"
      ref="destinations"
    >
      {{ (tl as any)[choice] }}
    </div>
  </div>
</template>
