const projActive = document.querySelector(".proj-active")

const projAllBtnRoot = document.querySelector("#all")
const projWebBtnRoot = document.querySelector("#web")
const projMobileBtnRoot = document.querySelector("#mobile")
const projDesktopBtnRoot = document.querySelector("#desktop")
const projAPIBtnRoot = document.querySelector("#api")

// initialize projActive's position to projAllBtnRoot's position
projActive.style.left = projAllBtnRoot.offsetLeft + "px"

let intervalId

//#region set active project indicator
const setActive = (projBtnRoot) => {
    const projBtnRootTop = projBtnRoot.offsetTop
    const projBtnRootLeft = projBtnRoot.offsetLeft
    const projActiveTop = projActive.offsetTop
    const projActiveLeft = projActive.offsetLeft

    //#region animate the indicator
    // top to bottom right
    if (projBtnRootTop > projActiveTop && projActiveLeft < projBtnRootLeft) {
        projActive.classList.add("proj-active-h-t-b-r-anim")
        projActive.style.left = projBtnRoot.offsetLeft + "px"
        projActive.style.top = projBtnRootTop + "px"
    // top to bottom left
    } else if (projBtnRootTop > projActiveTop && projActiveLeft > projBtnRootLeft) {
        projActive.classList.add("proj-active-h-t-b-l-anim")
        projActive.style.left = projBtnRoot.offsetLeft + "px"
        projActive.style.top = projBtnRootTop + "px"
    // bottom to top right
    } else if (projBtnRootTop < projActiveTop && projActiveLeft < projBtnRootLeft) {
        projActive.classList.add("proj-active-h-t-b-l-anim")
        projActive.style.left = projBtnRoot.offsetLeft + "px"
        projActive.style.top = projBtnRootTop + "px"
    // bottom to top left
    } else if (projBtnRootTop < projActiveTop && projActiveLeft > projBtnRootLeft) {
        projActive.classList.add("proj-active-h-t-b-r-anim")
        projActive.style.left = projBtnRoot.offsetLeft + "px"
        projActive.style.top = projBtnRootTop + "px"
    // top to bottom & bottom to top
    } else if (projBtnRootTop !== projActiveTop) {
        projActive.classList.add("proj-active-h-anim")
        projActive.style.top = projBtnRootTop + "px"
    }

    projActive.classList.add("proj-active-w-anim")
    projActive.style.left = projBtnRoot.offsetLeft + "px"
    //#endregion
}
//#endregion

//#region check the position of allBtnRoot to initialize the position of the indicator
const checkAllBtnRootPos = () => {
    if (projActive.offsetTop !== projAllBtnRoot.offsetTop) {
        projActive.style.top = projAllBtnRoot.offsetTop + "px"
        clearInterval(intervalId)
    }
}

intervalId = setInterval(checkAllBtnRootPos, 600)

// #region event listeners for project buttons
projAllBtnRoot.addEventListener("click", () => setActive(projAllBtnRoot))
projWebBtnRoot.addEventListener("click", () => setActive(projWebBtnRoot))
projMobileBtnRoot.addEventListener("click", () => setActive(projMobileBtnRoot))
projDesktopBtnRoot.addEventListener("click", () => setActive(projDesktopBtnRoot))
projAPIBtnRoot.addEventListener("click", () => setActive(projAPIBtnRoot))
// listen for animation end event of project active element
projActive.addEventListener("animationend", () => {
    projActive.classList.remove("proj-active-w-anim")

    if (projActive.classList.contains("proj-active-h-t-b-r-anim")) {
        projActive.classList.remove("proj-active-h-t-b-r-anim")
    } else if (projActive.classList.contains("proj-active-h-t-b-l-anim")) {
        projActive.classList.remove("proj-active-h-t-b-l-anim")
    } else if (projActive.classList.contains("proj-active-h-anim")) {
        projActive.classList.remove("proj-active-h-anim")
    }
})