const ClickButton = document.getElementById("toogle-skills") as HTMLButtonElement
const skills = document.getElementById("skills") as HTMLElement

ClickButton.addEventListener("click", ()=>{
    if (skills.style.display==='none') {
        skills.style.display='block'
    }else{
        skills.style.display='none'
    }
})