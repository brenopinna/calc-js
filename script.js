const root = document.querySelector(":root")
const themeSwitcherButton = document.getElementById("theme-switcher")
const input = document.getElementById("input")
const keys = document.querySelectorAll("#keys button")
const resultInput = document.getElementById("result")
const copyButton = document.getElementById("copy")

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
]

input.addEventListener("keydown", e => {
  e.preventDefault()
  resetCopyButton()
  if (allowedKeys.includes(e.key)) {
    e.target.value += e.key
  } else if (e.key === "Backspace") {
    e.target.value = e.target.value.slice(0, -1)
  } else if (e.key === "Enter") {
    calculate()
  } else if (e.key === "c") {
    clear()
  }
})

keys.forEach(key => {
  key.addEventListener("click", e => {
    resetCopyButton()
    if (e.target.classList.contains("charKey")) {
      input.value += e.target.dataset.value
    } else if (e.target.id === "clear") {
      clear()
    } else if (e.target.id === "equal") {
      calculate()
    }
  })
})

themeSwitcherButton.addEventListener("click", themeSwitcher)

copyButton.addEventListener("click", copy)

function themeSwitcher() {
  root.classList.toggle("light")
  root.classList.toggle("dark")
}

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
