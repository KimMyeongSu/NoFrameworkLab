export default (container) => {
  // 익명 함수
  const home = () => {
    container.textContent = "This is Home page"
  }

  const list = () => {
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
