document.getElementById("scrapeBtn").addEventListener("click", fetchEvents);

function fetchEvents() {
    fetch("http://127.0.0.1:5000/get-events")
        .then(response => response.json())
        .then(data => {
            let eventContainer = document.getElementById("events");
            eventContainer.innerHTML = ""; // Clear previous data

            data.forEach(event => {
                let card = document.createElement("div");
                card.className = "event-card";
                card.innerHTML = `
                    <h3>${event.title}</h3>
                    <p>${event.date}</p>
                    <button onclick="openModal('${event.link}')">🎟️ Get Tickets</button>
                `;
                eventContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching events:", error));
}

function openModal(eventLink) {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal").dataset.eventLink = eventLink;
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

function subscribe() {
    const email = document.getElementById("email").value;
    if (email) {
        const eventLink = document.getElementById("modal").dataset.eventLink;
        alert("Thank you for subscribing! Redirecting you to the event page.");
        window.location.href = eventLink; // Redirect to the event's ticketing page
    } else {
        alert("Please enter a valid email.");
    }
}
