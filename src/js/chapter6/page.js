export default (container) => {
  const home = () => {
    container.textContent = "This is Home page"
  }

  const list = () => {
    console.log(`이거콜?`)
    container.textContent = "This is List Page"
  }

  const notFound = () => {
    container.textContent = "Page Not Found!"
  }

  return {
    home,
    list,
    notFound,
  }
}
