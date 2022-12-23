const navFragment = document.createDocumentFragment();
const mySec = document.querySelectorAll('section');
const myNav = document.getElementById('navbar__list');
const myLinks = document.getElementsByClassName("menu__link");
const myButton = document.getElementById("integrate");

const createNavBar = () => {
    for (const section of mySec) {
        
        const navItem = document.createElement('li');
        const navItemLink = document.createElement('a');

        
        navItemLink.classList.add('menu__link');
        navItemLink.innerHTML = `${section.dataset.nav}`;
        navItemLink.setAttribute("href", `#${section.id}`);

        navItem.appendChild(navItemLink);
        navFragment.appendChild(navItem);
        myNav.append(navFragment);
    };
};


const activeClass = () => {
    for (const section of mySec) {
        
        const rect = section.getBoundingClientRect();
        const allNavLinks = document.querySelectorAll(`[href="#${section.id}"]`);
        for (const link of allNavLinks) {
            (rect.top >= 0 && rect.top < 500) ? (
                
                `
                ${section.classList.add("your-active-class")}
                ${link.classList.add("menu__link__active")}
                `
            ) : (
                
                `
                ${section.classList.remove("your-active-class")}
                ${link.classList.remove("menu__link__active")}
                `
            );
        };
    };
};

// Smooth Scroll
const smoothScroll = () => {
    for (const link of myLinks) {
        link.addEventListener("click", e => {
            e.preventDefault();
            const sectionID = e.target.getAttribute("href").substring(1);
            document.getElementById(`${sectionID}`).scrollIntoView({ behavior: "smooth" });
        });
    };
};



createNavBar();


document.addEventListener('scroll', activeClass);


smoothScroll();


myButton.addEventListener("click", () => myNav.classList.toggle("toggle-show"));


const scrollTopDiv = document.querySelector(".scroll-top");
const scrollTopLink = document.querySelector(".scroll-top-link");

window.onscroll = () => {
    if (window.pageYOffset > 300) {
        scrollTopDiv.style.display = "flex";
    } else {
        scrollTopDiv.style.display = "none";
    };
};

scrollTopLink.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(".main__hero").scrollIntoView({ behavior: "smooth", block: "center" });
});