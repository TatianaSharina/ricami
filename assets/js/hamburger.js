const hamburger = document.querySelector('.hamburger');
const hamburgerBox = document.querySelector('.side-menu');

hamburger.addEventListener('click', function () {
    if (!hamburgerBox.classList.contains("is-active")) {
        hamburgerBox.classList.add("is-active");
        this.classList.add("is-active");
    } else {
        hamburgerBox.classList.remove("is-active");
        this.classList.remove("is-active");
    }
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        hamburgerBox.classList.remove("is-active");
        hamburger.classList.remove("is-active");
    })
}