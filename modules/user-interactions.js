import { resetCopyButton } from "./copy-functions.js"
import { allowedKeys } from "./allowed-keys.js"
import { calculate, clear } from "./calculator-functions.js"

import { input, copyButton, root, keys, resultInput } from "./dom-elements.js"

const keyboardInteraction = () =>
  input.addEventListener("keydown", e => {
    e.preventDefault()
    resetCopyButton(copyButton, root)
    if (allowedKeys.includes(e.key)) {
      e.target.value += e.key
    } else if (e.key === "Backspace") {
      e.target.value = e.target.value.slice(0, -1)
    } else if (e.key === "Enter") {
      calculate(resultInput, input, root)
    } else if (e.key === "c") {
      clear(input)
    }
  })

const clickInteraction = () =>
  keys.forEach(key => {
    key.addEventListener("click", e => {
      resetCopyButton(copyButton, root)
      if (e.target.classList.contains("charKey")) {
        input.value += e.target.dataset.value
      } else if (e.target.id === "clear") {
        clear(input)
      } else if (e.target.id === "equal") {
        calculate(resultInput, input, root)
      }
    })
  })

export { keyboardInteraction, clickInteraction }
