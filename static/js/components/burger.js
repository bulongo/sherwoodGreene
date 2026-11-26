export const burger = () => {
  const burgerBtn = document.querySelector(".burger")
  const navList = document.querySelector(".navList")

  burgerBtn.addEventListener("click", () => {
    if(navList.classList.contains("active")) {
      navList.classList.remove("active")
      burgerBtn.classList.remove("active")
    } else if(!navList.classList.contains("active")) {
      navList.classList.add("active")
      burgerBtn.classList.add("active")
    }
  })
}
