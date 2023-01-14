let navlinks = document.querySelector(".navlinks"),
toggleBar = document.querySelector(".toggle-icon");
toggleBar.onclick = () => {
    navlinks.classList.toggle("active");
}