import createRouter from "./router.js"
import createPages from "./page.js"

// main 태그가 DOM에 추가된 후에 container를 선택
const container = document.querySelector("main")

if (container) {
  const pages = createPages(container)

  const router = createRouter()

  router.addRoute("#/", pages.home).addRoute("#/list", pages.list).setNotFound(pages.notFound).start()

  const NAV_BTN_SELECTOR = "button[data-navigate]"

  document.body.addEventListener("click", (e) => {
    const { target } = e
    if (target.matches(NAV_BTN_SELECTOR)) {
      const { navigate } = target.dataset
      router.navigate(navigate)
    }
  })
} else {
  console.error("Main container not found")
}
