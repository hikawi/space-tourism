<script setup lang="ts">
defineProps<{
  pathname: string;
}>();

const links = [
  { name: "home", path: "/" },
  { name: "destination", path: "/destination" },
  { name: "crew", path: "/crew" },
  { name: "technology", path: "/technology" },
];
</script>

<template>
  <ol
    class="z-0 hidden h-full w-fit list-none flex-row items-center justify-end gap-12 bg-white bg-opacity-5 px-10 backdrop-blur-2xl md:flex xl:pl-40"
  >
    <li class="h-full min-w-fit" v-for="link in links">
      <a
        :href="link.path"
        class="text-preset-8 flex h-full items-center justify-center border-b-2 uppercase hover:border-white hover:border-opacity-50"
        :class="{
          'border-white': pathname === link.path,
          'border-transparent': pathname !== link.path,
        }"
      >
        {{ link.name }}
      </a>
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
