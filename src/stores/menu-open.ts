import { atom } from "nanostores";

const $menuOpen = atom(false);

function openMenu() {
  $menuOpen.set(true);
}

function closeMenu() {
  $menuOpen.set(false);
}

function toggleMenu() {
  $menuOpen.get() ? closeMenu() : openMenu();
}

export { $menuOpen, closeMenu, openMenu, toggleMenu };
