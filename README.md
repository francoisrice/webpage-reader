# webpage-reader

Webpage to audio reader via Google Text to Speech

## Current Focus

Create `/GET` status check and `/POST` endpoints to generate output file from a string.

## Roadmap

- Create backend and frontend
  - Frontend sends URL as string to Backend, then loading screen/animation
    - Then downloads the audio file from the backend when ready, serving it to the user
  - Backend handles scraping
    - Connecting to TTS API
    - And creating audio file
- Create audio output of Medium post from URL. Output and play via browser
  - Scrape Medium articles
    - Repeatably isolate the article text
- Store URLs/audio content for later reading
- User accounts and content segmented for users
- Minimalist and clean web UI
- Cross Platform:
  - Android & iOS app
  - Chrome & FireFox extension
