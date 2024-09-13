var ClickButton = document.getElementById("toogle-skills");
var skills = document.getElementById("skills");
ClickButton.addEventListener("click", function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
