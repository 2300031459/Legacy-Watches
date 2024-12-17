let images = [
    "images/onewatch.png",
    "images/twowatch.png",
    "images/threewatch.png",
    "images/fourwatch.png",
    "images/fivewatch.png"
];
let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById("current-img");

    imgElement.classList.add("fade-out");

    setTimeout(() => {

        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];

        imgElement.classList.remove("fade-out");
    }, 300);
}

setInterval(changeImage, 5000);


// Chaning Names
let products = [
    {
        image: "images/oneimgstore.jpeg",
        name: "Tayroc",
        about: "Divers Sixty-Five",
        price: "$5,470",
        description: "PIEF 01 733 7720 406-1-00 21 18"
    },
    {
        image: "images/twoimagestore.jpeg",
        name: "Losian",
        about: "Men's Premium",
        price: "$10,250",
        description: "PIEF 02 734 7721 456-1-10 27 36"
    },
    {
        image: "images/threeimgstore.jpeg",
        name: "Titan",
        about: "Classic Collection",
        price: "$15,999",
        description: "PIEF 03 738 7730 467-2-11 28 40"
    },
    {
        image: "images/fourimgstore.jpeg",
        name: "Rolex",
        about: "Submariner Edition",
        price: "$25,000",
        description: "PIEF 04 739 7733 478-2-12 29 45"
    },
    {
        image: "images/fiveimgstore.jpeg",
        name: "Omega",
        about: "Men's Fashion",
        price: "$18,500",
        description: "PIEF 05 740 7735 489-3-13 30 50"
    }
];
        let currentIndex1 = 0;

        function changeContent() {
            const imgElement = document.getElementById("inner-img");
            const nameElement = document.getElementById("container-text");
            const aboutElement = document.getElementById("inner-about");
            const priceElement = document.getElementById("inner-price");
            const descriptionElement = document.getElementById("inner-dis");

            currentIndex = (currentIndex + 1) % products.length;
            const currentProduct = products[currentIndex];

            imgElement.src = currentProduct.image;
            nameElement.textContent = currentProduct.name;
            aboutElement.textContent = currentProduct.about;
            priceElement.textContent = currentProduct.price;
            descriptionElement.textContent = currentProduct.description;

        }

        setInterval(changeContent, 5000);

// Footer

function toggleContent(section) {
    const aboutContent = document.getElementById('about-content');
    const faqContent = document.getElementById('ser-content');
    const blogContent = document.getElementById('blog-content');
    const contactContent = document.getElementById('contact-content');

    aboutContent.style.display = "none";
    faqContent.style.display = "none";
    blogContent.style.display = "none";
    contactContent.style.display = "none";

    if (section === 'about') {
        aboutContent.style.display = "block";
    } else if (section === 'ser') {
        faqContent.style.display = "block";
    } else if (section === 'blog') {
        blogContent.style.display = "block";
    } else if (section == 'contact') {
        contactContent.style.display = "block";
    }
}