// Mock data for events
const events = [
    {
        title: "AI Frenzy: Dream it, Generate it",
        date: "11th - 13th October 2024",
        description: "A chance to dive deep into the world of Artificial Intelligence and unlock your creative potential!",
        url: "https://unstop.com/o/AyY7WrJ?lb=IU6r8FHz&utm_medium=Share&utm_source=shortUrl",
        photos: [
            "photo1.jpg",
            "photo2.jpg",
            "photo3.jpg"
        ]
    }
];

// Function to load events dynamically
function loadEvents() {
    const eventsContainer = document.getElementById('eventsContainer');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        const eventLink = document.createElement('a');
        eventLink.href = event.url; // Add the URL to the event object
        eventLink.target = '_blank'; // Open the link in a new tab

        const eventTitle = document.createElement('h3');
        eventTitle.textContent = event.title;

        const eventDate = document.createElement('p');
        eventDate.textContent = `Date: ${event.date}`;

        const eventDescription = document.createElement('p');
        eventDescription.textContent = event.description;

        eventLink.appendChild(eventTitle);
        eventLink.appendChild(eventDate);
        eventLink.appendChild(eventDescription);

        eventCard.appendChild(eventLink);

        // Add an event listener to the event card
        eventCard.addEventListener('click', () => {
            // Create a new page to display the photos
            const photoPage = document.createElement('div');
            photoPage.className = 'photo-page';

            // Create a header for the photo page
            const photoHeader = document.createElement('h2');
            photoHeader.textContent = event.title;

            // Create a container for the photos
            const photoContainer = document.createElement('div');
            photoContainer.className = 'photo-container';

            // Add the photos to the photo container
            event.photos.forEach(photo => {
                const photoElement = document.createElement('img');
                photoElement.src = photo;
                photoContainer.appendChild(photoElement);
            });

            // Add the photo header and container to the photo page
            photoPage.appendChild(photoHeader);
            photoPage.appendChild(photoContainer);

            // Add the photo page to the body of the document
            document.body.appendChild(photoPage);
        });

        eventsContainer.appendChild(eventCard);
    });
}

// Call the loadEvents function when the page loads
window.onload = loadEvents;