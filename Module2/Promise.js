"use strict";

function fetchURL(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Content of ${url}`);
        }, Math.random() * 2000);
    });
}

async function loadURLs(urls) {
    try {
        const promises = urls.map(url => fetchURL(url));
        const contents = await Promise.all(promises);
        return contents;
    } catch (error) {
        console.error("Error loading URLs:", error);
        throw error;
    }
}


const urls = ["https://example.com/page1", "https://example.com/page2", "https://example.com/page3"];

loadURLs(urls)
    .then(contents => {
        console.log("Contents of URLs:", contents);
    })
    .catch(error => {
        console.error("Failed to load URLs:", error);
    });
