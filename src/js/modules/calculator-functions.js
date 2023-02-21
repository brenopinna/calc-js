import { resultInput, input, root } from "./dom-elements.js"

function calculate() {
  try {
    resultInput.style.backgroundColor = "transparent"
    resultInput.value = eval(input.value)
  } catch {
    resultInput.style.backgroundColor =
      getComputedStyle(root).getPropertyValue("--error-color")
    resultInput.value = "ERRO!"
  }
}

function clear() {
  input.value = ""
}

export { calculate, clear }
