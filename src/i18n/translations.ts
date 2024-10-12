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

const $destination = i18n("destination", {
  pick: "Pick your destination",
  moon: "Moon",
  moonDescription:
    "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  moonDistance: "384,400 km",
  moonTravel: "3 days",
  mars: "Mars",
  europa: "Europa",
  titan: "Titan",
});

const $mars = i18n("destination/mars", {
  description:
    "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
  distance: "225 mil. km",
  travel: "9 months",
});

const $europa = i18n("destination/europa", {
  description:
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  distance: "628 mil. km",
  travel: "3 years",
});

const $titan = i18n("destination/titan", {
  description:
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  distance: "1.6 bil. km",
  travel: "7 years",
});

export { $destination, $europa, $language, $main, $mars, $shared, $titan };
