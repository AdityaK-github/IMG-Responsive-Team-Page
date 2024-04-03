const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".header-tools-mobile").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".header-links-mobile").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


window.addEventListener("resize", function () {
    updatePage();
});

function updatePageForSmallScreens() {
    const profileContainers = document.querySelectorAll('.profile');
    profileContainers.forEach(container => {
        const image = container.querySelector('.profile-photo img');
        const imageHeight = image.offsetHeight;
        container.style.background = `linear-gradient(to bottom, white 0%, white ${imageHeight * 0.35}px, #5183B8 ${imageHeight * 0.35}px, #5183B8 ${imageHeight}px, white ${imageHeight}px, white 100%)`;
    });
}

function updatePageForLargeScreens() {
    const profileContainers = document.querySelectorAll('.profile');
    const parentContainers = [
        '.designers-list',
        '.developers-list',
        '.developers-list-2'
    ];

    parentContainers.forEach(containerSelector => {
        const parentContainer = document.querySelector(containerSelector);
        const parentContainerHeight = parentContainer.offsetHeight;

        profileContainers.forEach(container => {
            const image = container.querySelector('.profile-photo img');
            const imageHeight = image.offsetHeight;

            parentContainer.style.background = `linear-gradient(to bottom, white 0%, white ${parentContainerHeight * 0.3}px, #5183B8 ${parentContainerHeight * 0.3}px, #5183B8 ${imageHeight}px, white ${imageHeight}px, white 100%)`;
        });
    });
}

function updatePage() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 986) {
        updatePageForLargeScreens();
    } else {
        updatePageForSmallScreens();
    }
}

updatePage();
window.addEventListener('resize', updatePage);

function checkScreenSizeAndReload() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 986) {
        window.location.reload();
    }
}
window.addEventListener('resize', checkScreenSizeAndReload);
