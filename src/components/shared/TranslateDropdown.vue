<script setup lang="ts">
import { $locale } from "@/stores/i18n";
import { $tlMenuOpen } from "@/stores/translate-menu-open";
import { useStore } from "@nanostores/vue";

const availables = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "vi", name: "Tiếng Việt" },
];
const tlMenuOpen = useStore($tlMenuOpen);
</script>

<template>
  <div
    class="fixed inset-0 z-[60] size-full bg-white bg-opacity-50 p-6 duration-200"
    :class="{ invisible: !tlMenuOpen, visible: tlMenuOpen }"
  >
    <ul
      class="text-preset-8 flex h-fit w-full list-none flex-col divide-y-2 divide-zinc-700 bg-zinc-800 p-6 text-center duration-200"
      :class="{ '-translate-y-full': !tlMenuOpen, 'translate-y-0': tlMenuOpen }"
    >
      <li class="w-full" v-for="locale in availables">
        <button
          class="py-3"
          @click="
            $locale.set(locale.code);
            $tlMenuOpen.set(false);
          "
        >
          {{ locale.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
