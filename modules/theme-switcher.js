import { root } from "./dom-elements.js"

export function themeSwitcher() {
  root.classList.toggle("light")
  root.classList.toggle("dark")
}
