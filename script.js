const header =
    document.querySelector(".header");

const menuButton =
    document.getElementById("menuButton");

const navLinksContainer =
    document.getElementById("navLinks");

const navLinks =
    document.querySelectorAll(".nav-link");

const revealElements =
    document.querySelectorAll(".reveal");

const cursorLight =
    document.querySelector(".cursor-light");

const backToTop =
    document.getElementById("backToTop");

const sections =
    document.querySelectorAll("section[id]");

const typingText =
    document.getElementById("typingText");


function updateHeader() {

    if (window.scrollY > 30) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();


menuButton.addEventListener(
    "click",
    () => {

        menuButton.classList.toggle(
            "active"
        );

        navLinksContainer.classList.toggle(
            "open"
        );

        document.body.classList.toggle(
            "menu-open"
        );

    }
);


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            menuButton.classList.remove(
                "active"
            );

            navLinksContainer.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }
    );

});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


function updateActiveLink() {

    const position =
        window.scrollY + 180;


    sections.forEach(section => {

        const top =
            section.offsetTop;

        const height =
            section.offsetHeight;

        const id =
            section.getAttribute("id");


        if (
            position >= top &&
            position < top + height
        ) {

            navLinks.forEach(link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href")
                    === `#${id}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    document.addEventListener(
        "mousemove",
        event => {

            cursorLight.style.left =
                `${event.clientX}px`;

            cursorLight.style.top =
                `${event.clientY}px`;

        }
    );

}


const statusWords = [

    "LEARNING",
    "BUILDING",
    "CREATING",
    "EXPERIMENTING",
    "IMPROVING"

];


let statusIndex = 0;


function changeStatus() {

    typingText.style.opacity =
        "0";


    setTimeout(
        () => {

            statusIndex =
                (
                    statusIndex + 1
                )
                %
                statusWords.length;


            typingText.textContent =
                statusWords[
                    statusIndex
                ];


            typingText.style.opacity =
                "1";

        },

        250
    );

}


typingText.style.transition =
    "opacity .25s ease";


setInterval(
    changeStatus,
    2200
);


const heroArt =
    document.querySelector(
        ".developer-art"
    );


const heroArtContainer =
    document.querySelector(
        ".hero-art"
    );


if (
    heroArt &&
    heroArtContainer &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    heroArtContainer.addEventListener(
        "mousemove",
        event => {

            const rect =
                heroArtContainer
                    .getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const moveX =
                (
                    x - centerX
                )
                * 0.015;


            const moveY =
                (
                    y - centerY
                )
                * 0.015;


            heroArt.style.transform =
                `
                translate(
                    ${moveX}px,
                    ${moveY}px
                )
                `;

        }
    );


    heroArtContainer.addEventListener(
        "mouseleave",
        () => {

            heroArt.style.transform =
                "translate(0,0)";

        }
    );

}


const projectImages =
    document.querySelectorAll(
        ".project-image"
    );


projectImages.forEach(
    imageContainer => {

        const image =
            imageContainer.querySelector(
                "img"
            );


        if (!image) {
            return;
        }


        imageContainer.addEventListener(
            "mousemove",
            event => {

                if (
                    !window.matchMedia(
                        "(pointer: fine)"
                    ).matches
                ) {

                    return;

                }


                const rect =
                    imageContainer
                        .getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    )
                    /
                    rect.width;


                const y =
                    (
                        event.clientY -
                        rect.top
                    )
                    /
                    rect.height;


                const moveX =
                    (
                        x - 0.5
                    )
                    * 8;


                const moveY =
                    (
                        y - 0.5
                    )
                    * 8;


                image.style.transform =
                    `
                    scale(1.04)
                    translate(
                        ${moveX}px,
                        ${moveY}px
                    )
                    `;

            }
        );


        imageContainer.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) translate(0,0)";

            }
        );

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


window.addEventListener(
    "load",
    () => {

        updateHeader();

        updateActiveLink();

    }
);