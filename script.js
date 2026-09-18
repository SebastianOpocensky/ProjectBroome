// Sample Australian Properties
const properties = [
    {
        id: 1,
        title: "Frangipani Suite",
        type: "apartment",
        price: "$PriceMissing / night",
        location: "LocationMissing, Broome (WA)",
        specs: "AmountMissing Guests • AmountMissing Bedrooms • AmountMissing Baths",
        description: "The Frangipani Suite is a spacious one-bedroom villa designed for relaxed tropical living. Surrounded by lush greenery and the delicate scent of frangipani blossoms, this private retreat offers the perfect blend of comfort and serenity just moments from the region’s stunning coastline. Step outside into your own secluded oasis, where an open-air shower invites you to unwind beneath the sky, and a private BBQ area sets the scene for easy evenings and alfresco dining." 
        
        , 
        images: [
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB--2.jpg",
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB--3.jpg",
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB--13.jpg",
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB--8.jpg",
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB--9.jpg",
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB-.jpg",
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB-9836.jpg",
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB-9845.jpg",
            "assets/Frangipani Suite/Frangipani Suite/Frang Mantra Air BnB-9854.jpg",
        ]
    },
    {
        id: 2,
        title: "Sunset Studio",
        type: "apartment",
        price: "$PriceMissing / night",
        location: "Cable Beach, Broome (WA)",
        specs: "AmountMissing Guests • AmountMissing Bedrooms • AmountMissing Baths",
        description: "Situated just a short walk from Cable Beach entertainment precinct housing restaurants, a brewery and the world-famous beach itself this ground floor studio apartment is perfect for weekend getaways, business trips or a beachside escape! Within the Oaks Sanctuary Resort is a restaurant, multiple pools, a hair salon and lots of wildlife - including various bird species, lizards and even wallabies!",
        images: [
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (1 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (3 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (4 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (5 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (6 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (8 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (13 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (16 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (19 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (20 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (30 of 35).jpg",
            "assets/Sunset Studio/Sunset Studio/Oaks unit 31 Air BnB (33 of 35).jpg"
        ]
    },
    {
        id: 3,
        title: "Villa 166",
        type: "house",
        price: "$PriceMissing / night",
        location: "LocationMissing, Broome (WA)",
        specs: "AmountMissing Guests • 3 Bedrooms • 2 Baths",
        description: "Experience the best of Broome from this stylish 3-bedroom, 2-bathroom villa located within the sought-after Oaks Sanctuary Resort. Perfectly positioned just a short walk from the Cable Beach entertainment precinct and the world-famous shoreline, you’ll have restaurants, bars, and stunning natural surrounds right at your doorstep. The villa offers a relaxed, modern space ideal for families, couples, or groups, with comfortable living areas and a private setting to unwind.",
        images: [
            "assets/Villa 166/Villa 166/Oaks Pool 2.jpeg",
            "assets/Villa 166/Villa 166/Oaks Pool.jpeg",
            "assets/Villa 166/Villa 166/ext.jpg",
            "assets/Villa 166/Villa 166/Outside 2.jpg",
            "assets/Villa 166/Villa 166/Outside 3.jpg",
            "assets/Villa 166/Villa 166/Lounge.jpg",
            "assets/Villa 166/Villa 166/lounge3.jpg",
            "assets/Villa 166/Villa 166/Living dining kitchen.jpg",
            "assets/Villa 166/Villa 166/dining.jpg",
            "assets/Villa 166/Villa 166/kitchen.jpg",
            "assets/Villa 166/Villa 166/Kitchen 2.jpg",
            "assets/Villa 166/Villa 166/Kitchen 3.jpg",
            "assets/Villa 166/Villa 166/Bed 1 again.jpg",
            "assets/Villa 166/Villa 166/Bed 2 again.jpg",
            "assets/Villa 166/Villa 166/Bed 3.jpg",
            "assets/Villa 166/Villa 166/Bathroom.jpg",
            "assets/Villa 166/Villa 166/Ensuite 3.jpg",
            "assets/Villa 166/Villa 166/Ensuite 4.jpg"
        ]
    }
];

let currentSlideIndex = 0;
let currentPropertyImages = [];

// Render Cards
function renderProperties(filter = 'all') {
    const grid = document.getElementById('property-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? properties : properties.filter(p => p.type === filter);

    filtered.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.images[0]}" alt="${item.title}" class="card-img">
            <div class="card-body">
                <h3>${item.title}</h3>
                <p class="location-tag">${item.location}</p>
                <p>${item.specs}</p>
                <div class="card-price">${item.price}</div>
            </div>
        `;
        card.addEventListener('click', () => openPropertyDetail(item));
        grid.appendChild(card);
    });
}

// Open Detail Subpage
function openPropertyDetail(property) {
    document.getElementById('main-view').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');

    document.getElementById('detail-title').innerText = property.title;
    document.getElementById('detail-location').innerText = property.location;
    document.getElementById('detail-price').innerText = property.price;
    document.getElementById('detail-specs').innerText = property.specs;
    document.getElementById('detail-description').innerText = property.description;

    currentPropertyImages = property.images;
    currentSlideIndex = 0;
    updateSlideImage();

    window.scrollTo(0, 0);
}

// Slideshow Controls
function updateSlideImage() {
    document.getElementById('slide-img').src = currentPropertyImages[currentSlideIndex];
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + currentPropertyImages.length) % currentPropertyImages.length;
    updateSlideImage();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % currentPropertyImages.length;
    updateSlideImage();
});

// Back Navigation
document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('detail-view').classList.add('hidden');
    document.getElementById('main-view').classList.remove('hidden');
});

// Burger Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

// Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProperties(e.target.dataset.filter);
    });
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    e.target.reset();
});

// Contact Page Form Listener
const contactPageForm = document.getElementById('contact-page-form');
if (contactPageForm) {
    contactPageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! Jack or a team member will get back to you shortly.');
        contactPageForm.reset();
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => renderProperties());