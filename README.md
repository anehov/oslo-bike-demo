# Simple bike station monitor for Oslo
A quick demonstration of how to fetch and display data from json using vanilla JavaScript.
A [live demo](https://anehov.github.io/oslo-bike-demo/) is available on github pages.
## Running locally
This project makes use of ES6 modules.
These cannot be used from a local `file://` URL, only trough HTTP.
Fortunately starting a server is really easy!:

```
git clone https://github.com/anehov/oslo-bike-demo
cd oslo-bike-demo
npx http-server -a localhost
```

Then just open the printed URL in your web browser.

## Running tests
```
npm install
npm test
```
