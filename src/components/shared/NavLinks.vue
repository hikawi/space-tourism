<script setup lang="ts">
import { $shared } from "@/i18n/translations";
import { $locale } from "@/stores/i18n";
import { $tlMenuOpen } from "@/stores/translate-menu-open";
import { useStore } from "@nanostores/vue";
import IconTranslate from "./IconTranslate.vue";

defineProps<{
  pathname: string;
}>();

const links = [
  { name: "home", path: "/" },
  { name: "destination", path: "/destination" },
  { name: "crew", path: "/crew" },
  { name: "technology", path: "/technology" },
];

const tl = useStore($shared);
const locale = useStore($locale);
</script>

<template>
  <ol
    class="hidden h-full w-full list-none flex-row items-center justify-end gap-12 bg-white bg-opacity-5 pr-10 backdrop-blur-2xl md:flex"
  >
    <li class="h-full" v-for="link in links">
      <a
        :href="link.path"
        class="text-preset-8 flex h-full items-center justify-center border-b-2 uppercase hover:border-white hover:border-opacity-50"
        :class="{
          'border-white': pathname === link.path,
          'border-transparent': pathname !== link.path,
        }"
      >
        {{ (tl as any)[link.name] }}
      </a>
    </li>

    <li class="h-6 w-fit">
      <button
        class="text-preset-8 h-full"
        @click="$tlMenuOpen.set(true)"
        aria-label="Change language"
      >
        <IconTranslate class="size-6" />
      </button>
    </li>
  </ol>
</template>

<style scoped>
ol {
  counter-set: item -1;
}

ol > li > a:before {
  content: "0" counter(item);
  counter-increment: item;
  @apply mr-3 font-bold;
}
</style>
