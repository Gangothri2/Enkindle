// Mock data for events
const events = [
    {
        title: "Tech Expo",
        date: "October 20, 2024",
        description: "A showcase of the latest technology innovations by club members."
    },
    {
        title: "Hackathon",
        date: "November 15, 2024",
        description: "A 24-hour hackathon to build projects and showcase programming skills."
    },
    {
        title: "Workshop: AI for Beginners",
        date: "December 5, 2024",
        description: "An introductory workshop on artificial intelligence and machine learning."
    },
    {
        title: "Networking Event",
        date: "January 10, 2025",
        description: "A networking event to connect with industry professionals and alumni."
    }
];

// Function to load events dynamically
function loadEvents() {
    const eventsContainer = document.getElementById('eventsContainer');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        const eventTitle = document.createElement('h3');
        eventTitle.textContent = event.title;

        const eventDate = document.createElement('p');
        eventDate.textContent = `Date: ${event.date}`;

        const eventDescription = document.createElement('p');
        eventDescription.textContent = event.description;

        eventCard.appendChild(eventTitle);
        eventCard.appendChild(eventDate);
        eventCard.appendChild(eventDescription);

        eventsContainer.appendChild(eventCard);
    });
}

// Function to handle image modal
function setupImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    const images = document.querySelectorAll('.gallery-img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Close the modal
    const closeModal = document.querySelector('.close');
    closeModal.onclick = function() {
        modal.style.display = 'none';
    };
}

// Carousel Functionality
let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.getElementById('carousel');
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Call the loadEvents and setupImageModal functions when the page loads
window.onload = () => {
    loadEvents();
    setupImageModal();
};
