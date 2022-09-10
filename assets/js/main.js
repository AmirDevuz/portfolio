// THEME

const themeButton = document.querySelector(".profil__theme"),
themeIcon = document.querySelector(".profil__theme i");

themeButton.addEventListener("click", () => {
    if(document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        themeIcon.className = "ri-moon-line";
    } else {
        document.body.classList.add("dark");
        themeIcon.className = "ri-sun-line";
    }
});

// THEME AND

const tabs = document.querySelectorAll("[data-target]");
const filterContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabs.forEach(t => {
            t.classList.remove("active");
        });

        tab.classList.add("active");

        filterContents.forEach(f => {
            f.classList.remove("active");
        });

        target.classList.add("active");
    });


})

// const noScroll = () => {
//     if(document.body.classList.contains("no-scroll")) {
//         document.body.classList.remove("no-scroll");
//     } else {
//         document.body.classList.add("no-scroll");
//     }
// };
