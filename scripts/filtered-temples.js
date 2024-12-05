// Array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-exterior.jpg",
    },
    {
        templeName: "Hong Kong China Temple",
        location: "Hong Kong, China",
        dedicated: "1996-05-26",
        area: 27999,
        imageUrl: "https://churchofjesuschrist.org/imgs/9df3383b1d493e35c2679232f417bf61e3778dbe/full/1920%2C/0/default",
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004-01-11",
        area: 17000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-exterior.jpg",
    },
];

// Function to render temples
function renderTemples(templesToRender) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear existing content

    templesToRender.forEach((temple) => {
        const templeCard = document.createElement("figure");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;
        gallery.appendChild(templeCard);
    });
}

// Filter temples based on criteria
function filterTemples(criteria) {
    let filteredTemples;

    switch (criteria) {
        case "Old":
            filteredTemples = temples.filter(
                (temple) => new Date(temple.dedicated).getFullYear() < 1900
            );
            break;
        case "New":
            filteredTemples = temples.filter(
                (temple) => new Date(temple.dedicated).getFullYear() > 2000
            );
            break;
        case "Large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            break;
        case "Small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Show all temples
    }

    renderTemples(filteredTemples);
}

// Event listener for menu navigation
document.querySelector(".nav-menu").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        const filter = e.target.textContent;
        filterTemples(filter);
    }
});

// Populate footer with current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial render
renderTemples(temples);
