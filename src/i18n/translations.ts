import { i18n } from "@/stores/i18n";

const $language = i18n("language", {
  name: "English",
});

const $shared = i18n("shared", {
  home: "Home",
  destination: "Destination",
  crew: "Crew",
  technology: "Technology",
});

const $main = i18n("main", {
  title: "SO, YOU WANT TO TRAVEL TO",
  space: "SPACE",
  text: "Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!",
  explore: "Explore",
});

export { $language, $main, $shared };
