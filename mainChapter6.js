import "./style.css"

document.querySelector("#app").innerHTML = `
      <div class="navbar">
        <header>
          <a href="#/">Go To Index</a>
          <a href="#/list">Go To List</a>
          <a href="#/dummy">Dummy Page</a>
        </header>
        <main></main>
      </div>
`

//모듈분리 해볼것.
const router = () => {
  const routes = []
  let notFound = () => {}

  const router = {}

  const checkRoutes = () => {
    const currentRoute = routes.find((route) => {
      return route.fragment === window.location.hash
    })

    if (!currentRoute) {
      notFound()
      return
    }

    currentRoute.component()
  }

  router.addRoute = (fragment, component) => {
    routes.push({
      fragment,
      component,
    })

    return router
  }

  router.setNotFound = (cb) => {
    notFound = cb
    return router
  }

  router.start = () => {
    window.addEventListener("hashchange", checkRoutes)

    if (!window.location.hash) {
      window.location.hash = "#/"
    }

    checkRoutes()
  }
}

const initText = () => {
  const home = () => {
    container.textContent = "This is Home page"
  }

  const list = () => {
    container.textContent = "This is List Page"
  }

  const notFound = () => {
    container.textContent = "Page Not Found!"
  }
}

//실행부
const container = document.querySelector("main")
const pages = router(container)
const routerTest = router()

routerTest.addRoute("#/", pages.home).addRoute("#/list", pages.list).setNotFound(pages.notFound).start()
