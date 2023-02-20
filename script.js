import { themeSwitcher } from "./modules/theme-switcher.js"
import { copy } from "./modules/copy-functions.js"
import { clickInteraction, keyboardInteraction } from "./modules/user-interactions.js"

import { themeSwitcherButton, copyButton } from "./modules/dom-elements.js"

themeSwitcherButton.addEventListener("click", themeSwitcher)

clickInteraction()
keyboardInteraction()

copyButton.addEventListener("click", copy)
