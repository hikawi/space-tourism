<script setup lang="ts">
import { $language, $shared } from "@/i18n/translations";
import { $menuOpen } from "@/stores/menu-open";
import { $tlMenuOpen } from "@/stores/translate-menu-open";
import { useStore } from "@nanostores/vue";
import { onMounted, ref } from "vue";
import IconTranslate from "./IconTranslate.vue";

const menuOpen = useStore($menuOpen);
const language = useStore($language);
const shared = useStore($shared);
const ignited = ref(false);

const links = [
  { name: "home", path: "/" },
  { name: "destination", path: "/destination" },
  { name: "crew", path: "/crew" },
  { name: "technology", path: "/technology" },
];

onMounted(() => {
  ignited.value = true;
});

defineProps<{
  active: string;
}>();
</script>

<template>
  <!-- The entire screen to block scrolling while this menu is available -->
  <div
    class="fixed inset-0 z-50 h-screen w-full overscroll-contain duration-200 md:hidden"
    :class="{ invisible: !menuOpen, visible: menuOpen }"
  >
    <div
      class="absolute right-0 top-0 flex h-full w-64 min-w-64 shrink-0 flex-col gap-12 bg-blue-900 bg-opacity-15 pl-8 backdrop-blur-2xl duration-200 motion-reduce:duration-0 md:hidden"
      :class="{ 'translate-x-full': !menuOpen, 'translate-x-0': menuOpen }"
    >
      <!-- Empty div to shift the things down. -->
      <div class="h-[5.5rem]"></div>

      <!-- The nav links -->
      <ol class="flex flex-col gap-8">
        <li
          v-for="link in links"
          class="text-preset-8 block uppercase"
          :class="{ 'border-r-2 border-white': active === link.path }"
        >
          <a :href="link.path">
            {{ (shared as any)[link.name] }}
          </a>
        </li>
      </ol>

      <!-- The translation button -->
      <button
        class="text-preset-8 flex flex-row items-center gap-2"
        @click="$tlMenuOpen.set(true)"
      >
        <IconTranslate class="size-6" />

        {{ language.name }}
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
ol {
  counter-reset: item;
  list-style-type: none;
}

ol > li::before {
  content: "0" counter(item);
  counter-increment: item;
  @apply mr-2 font-bold;
}

ol > li:first-child::before {
  counter-set: item 0;
}
</style>
