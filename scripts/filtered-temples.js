document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    var copyrightElement = document.getElementById("copyright");
    copyrightElement.textContent = currentYear;

    var lastModifiedDate = new Date(document.lastModified);
    var lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = lastModifiedDate.toDateString();
});

document.addEventListener("DOMContentLoaded", function () {
    var hamburgerBtn = document.getElementById("hamburger");
    var navMenu = document.getElementById("navMenu");

    if (!hamburgerBtn || !navMenu) {
        console.error("Hamburger button or navigation menu not found.");
        return;
    }

    function toggleMenu() {
        navMenu.classList.toggle("show");
        var isOpen = navMenu.classList.contains("show");
        hamburgerBtn.textContent = isOpen ? "✕" : "☰";
    }

    hamburgerBtn.addEventListener("click", function () {
        toggleMenu();
    });

    var menuItems = document.querySelectorAll("#navMenu ul li a");
    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            if (navMenu.classList.contains("show")) {
                toggleMenu();
            }
        });
    });
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        alt: "Aba Nigeria Temple",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        alt: "Manti Utah Temple",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        alt: "Payson Utah Temple",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        alt: "Yigo Guam Temple",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        alt: "Washington D.C. Temple",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        alt: "Lima Perú Temple",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        alt: "Mexico City Mexico Temple",
    },
    {
        templeName: "Meridian Idaho",
        location: "Meridian, Idaho, United States",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-3302-main.jpg",
        alt: "Meridian Idaho Temple",
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho, United States",
        dedicated: "2008, February, 10",
        area: 57000,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjF021utolG7yeE4RN2UhMu03u52HgR39JigFofLndqA&s",
        alt: "Rexburg Idaho Temple",
    },
    {
        templeName: "Spokane Washington",
        location: "Spokane, Washington, United States",
        dedicated: "1999, August, 21",
        area: 10500,
        imageUrl:
            "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/HJGFZBSNTVJVNVZ63H6TT42MOQ.jpg",
        alt: "Spokane Washington Temple",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const templeCardsContainer = document.getElementById("templeCards");

    const displayTemples = (filteredTemples) => {
        templeCardsContainer.innerHTML = "";
        filteredTemples.forEach((temple) => {
            const templeCard = document.createElement("div");
            templeCard.classList.add("temple-card");

            templeCard.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
            `;

            templeCardsContainer.appendChild(templeCard);
        });
    };

    displayTemples(temples);

    document.getElementById("navMenu").addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            const filter = event.target.textContent;

            let filteredTemples;
            if (filter === "Old") {
                filteredTemples = temples.filter(
                    (temple) => new Date(temple.dedicated).getFullYear() < 1900
                );
            } else if (filter === "New") {
                filteredTemples = temples.filter(
                    (temple) => new Date(temple.dedicated).getFullYear() > 2000
                );
            } else if (filter === "Large") {
                filteredTemples = temples.filter((temple) => temple.area > 90000);
            } else if (filter === "Small") {
                filteredTemples = temples.filter((temple) => temple.area < 10000);
            } else {
                filteredTemples = temples;
            }

            displayTemples(filteredTemples);
        }
    });
});
