from flask import Flask, jsonify
from flask_cors import CORS
from apscheduler.schedulers.background import BackgroundScheduler
import time

app = Flask(__name__)
CORS(app)

events = []

# Function to scrape events
def scrape_events():
    global events
    # Add your scraping logic here. For now, we're just using static data.
    events = [
        {"title": "Events in Australia", "date": "", "link": "https://www.eventbrite.com/d/india--delhi--102030425/australia-day/"},
        {"title": "Events in Sydney", "date": "", "link": "https://www.eventbrite.com/d/india--delhi--102030425/sydney/"}
    ]
    print("Events scraped and updated.")

# Schedule the scraping to run every 24 hours
scheduler = BackgroundScheduler()
scheduler.add_job(scrape_events, 'interval', hours=24)
scheduler.start()

@app.route("/")
def home():
    return "Flask Server is Running!"

@app.route("/get-events", methods=["GET"])
def get_events():
    return jsonify(events)

if __name__ == "__main__":
    scrape_events()  # Scrape events immediately when the server starts
    app.run(debug=True)
