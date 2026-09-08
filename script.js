// Sample Australian Properties
const properties = [
    {
        id: 1,
        title: "Modern Beachside Loft",
        type: "apartment",
        price: "$280 / night",
        location: "Cable Beach, Broome (WA)",
        specs: "2 Guests • 1 Bedroom • 1 Bath",
        description: "Enjoy stunning coastal views and modern luxury in this newly renovated studio loft, just steps away from the beach.",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        title: "Luxury Coastal Villa",
        type: "house",
        price: "$520 / night",
        location: "Coconut Wells, Broome (WA)",
        specs: "6 Guests • 3 Bedrooms • 2 Baths",
        description: "Spacious house with a private pool, open plan living, and short distance to local dining and surf spots.",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            ""
        ]
    },
    {
        id: 3,
        title: "Downtown Penthouse Apartment",
        type: "apartment",
        price: "$340 / night",
        location: "Broome Centre, Broome (WA)",
        specs: "4 Guests • 2 Bedrooms • 2 Baths",
        description: "High-rise apartment overlooking the skyline. Fully equipped kitchen, private balcony, and close to tram lines.",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
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