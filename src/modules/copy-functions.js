import { copyButton, root, resultInput } from "./dom-elements.js"

function copy() {
  navigator.clipboard.writeText(resultInput.value)
  copyButton.innerText = "Copied!"
  const primaryColor = getComputedStyle(root).getPropertyValue("--primary-color")
  copyButton.style.borderColor = primaryColor
  copyButton.style.color = primaryColor
}

function resetCopyButton() {
  copyButton.innerText = "Copy"
  copyButton.style.borderColor = getComputedStyle(root).getPropertyValue("--border-color")
  copyButton.style.color = getComputedStyle(root).getPropertyValue("--font-color")
}

export { copy, resetCopyButton }
