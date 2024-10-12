import { browser, createI18n, localeFrom } from "@nanostores/i18n";
import { persistentAtom } from "@nanostores/persistent";

const $locale = persistentAtom<string>("locale", "en", { listen: false });
const locale = localeFrom(
  $locale,
  browser({
    available: ["en", "ja", "vi"],
    fallback: "en",
  }),
);

const i18n = createI18n(locale, {
  get: (locale) => import(`../i18n/${locale}.json`),
});

export { $locale, i18n };
