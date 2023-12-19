const links = document.querySelectorAll(".nav .list");

function isActiveLink() {
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
}

for (let i = 1; i < links.length; i++) {
    links[i].addEventListener("click", isActiveLink);
}

document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".navbar").classList.toggle("active");
});

document.querySelector(".profile").addEventListener("click", () => {
    document.querySelector(".setting").classList.toggle("active");
});
