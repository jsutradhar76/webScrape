# webScrape
Sydney Events Web Scraper
This project fetches and displays events happening in Sydney, Australia. The events are automatically scraped from event websites every 24 hours and listed on a webpage. Users can click on the "GET TICKETS" button to enter their email address and get redirected to the original event page for tickets.

Setup Instructions
Prerequisites
Before setting up the project, ensure you have the following installed:

Python 3.6+
Node.js (for running JavaScript in the browser)
Step 1: Clone the Repository
Clone this repository to your local machine:

bash
Copy
Edit
git clone https://github.com/yourusername/sydney-events-web-scraper.git
cd sydney-events-web-scraper
Step 2: Install Python Dependencies
Navigate to the backend folder and set up a virtual environment:

bash
Copy
Edit
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Now, install the required Python libraries:

bash
Copy
Edit
pip install -r requirements.txt
requirements.txt contains the following libraries:

Flask
Flask-CORS
APScheduler
Step 3: Install Frontend Dependencies (Optional)
If you have any additional JavaScript or CSS dependencies, install them (optional). For now, the frontend uses plain HTML/CSS/JS.

Step 4: Run the Flask Server
Navigate to the backend folder and run the Flask app:

bash
Copy
Edit
python server.py
By default, the Flask server will run at http://127.0.0.1:5000. The events will be available via the /get-events route.

Step 5: Open the Frontend
Open the index.html file in your browser to see the events display page.

Step 6: Run the Project Periodically
To ensure that the events are scraped every 24 hours, the Flask backend uses APScheduler. The event scraping will run in the background, so once you start the Flask server, the scraping will occur automatically.

Alternatively, you can use a tool like cron (on Linux/macOS) or a task scheduler on Windows to run the scraping script every 24 hours.
