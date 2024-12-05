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
        imageUrl: "https://churchofjesuschrist.org/imgs/e04d5651a770e152ef8f79c9d39f2fa75c900886/full/1920%2C/0/default",
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
        imageUrl: "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/800%2C/0/default",
    },
];

// Function to render temples
function renderTemples(templesToRender) {
    const gallery = document.querySelector("#templeGallery");
    gallery.innerHTML = ""; // Clear the gallery

    templesToRender.forEach((temple) => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;
        gallery.appendChild(card);
    });
}

// Filter temples based on selected criteria
function filterTemples(filter) {
    let filteredTemples;

    switch (filter) {
        case "old":
            filteredTemples = temples.filter(
                (temple) => new Date(temple.dedicated).getFullYear() < 1900
            );
            break;
        case "new":
            filteredTemples = temples.filter(
                (temple) => new Date(temple.dedicated).getFullYear() > 2000
            );
            break;
        case "large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Show all for "Home"
    }

    renderTemples(filteredTemples);
}

// Event listener for navigation menu
document.querySelector(".nav-menu").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) {
        const filter = button.getAttribute("data-filter");
        filterTemples(filter);
    }
});

// Populate footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial render of all temples
renderTemples(temples);
