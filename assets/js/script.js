function vision(animationName,boxNumber) {
    const box = document.querySelector('.b'+boxNumber);
    box.classList.toggle(animationName)
    navigator.clipboard.writeText(animationName);

    const btn = document.querySelector(`.b${boxNumber} + button`);
    if (btn.innerHTML === "Copied!") {
        btn.innerHTML = animationName
    } else {
        btn.innerHTML = "Copied!";
    }
}

function showNavigation() {
    const navbar = document.querySelector("#sidebar");
    if (screen.width > 992) {
        navbar.style.width = "20%";
        console.log(screen.width);
        document.querySelector("#content").style.width = "80%";
        document.querySelector("#menu-icon").style.display = "none";
    } else{
        navbar.style.width = "100%";
        console.log(screen.width);
    }
    navbar.style.display = "flex";
}

function hideNavigation() {
    const navbar = document.querySelector("#sidebar");
    navbar.style.width = "0%";
    navbar.style.display = "none";
    document.querySelector("#content").style.width = "100%";
    document.querySelector("#menu-icon").style.display = "block";
}

function copyURL(){
    navigator.clipboard.writeText('<link rel="stylesheet" href="https://meetkalani.github.io/Vision/vision.css">');
}