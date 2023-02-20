import { themeSwitcher } from "./modules/theme-switcher.js"
import { copy } from "./modules/copy-functions.js"
import { clickInteraction, keyboardInteraction } from "./modules/user-interactions.js"

import { themeSwitcherButton, copyButton, keys, input } from "./modules/dom-elements.js"

themeSwitcherButton.addEventListener("click", themeSwitcher)

input.addEventListener("keydown", keyboardInteraction)

keys.forEach(key => {
  key.addEventListener("click", clickInteraction)
})

copyButton.addEventListener("click", copy)
