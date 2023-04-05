const burger = document.getElementById("burger")
const c = document.querySelector('.main_header_navigation_ul')
burger.addEventListener("click", () => {

    c.classList.toggle('v-class')

})

const anni = document.getElementById("navbar_1")
anni.addEventListener("click", () => {
    c.classList.toggle('v-class')
})

const anni_1 = document.getElementById("navbar_2")
anni_1.addEventListener("click", () => {
    c.classList.toggle('v-class')
})

const anni_2 = document.getElementById("navbar_3")
anni_2.addEventListener("click", () => {
    c.classList.toggle('v-class')
})

const anni_3 = document.getElementById("navbar_4")
anni_3.addEventListener("click", () => {
    c.classList.toggle('v-class')
})

const text = document.querySelector(".web_devloper");

const textLoad = () => {
    setTimeout(() => {
        console.log("I'm Coder");
        text.textContent = "Coder";
    }, 0);
    setTimeout(() => {
        console.log("I'm Mentor");
        text.textContent = "web devloper";
    }, 2000);
    setTimeout(() => {
        console.log("I'm Student");
        text.textContent = "Student";
    }, 4000);
};

textLoad();
setInterval(textLoad, 6000);