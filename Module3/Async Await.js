"use strict";

async function fetchDataFromServer(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, Math.random() * 2000);
    });
}

async function fetchAllDataFromServers(urls) {
    try {
        const promises = urls.map(url => fetchDataFromServer(url));
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error("Error fetching data from servers:", error);
        throw error;
    }
}

const serverURLs = ["https://server1.example.com", "https://server2.example.com", "https://server3.example.com"];

fetchAllDataFromServers(serverURLs)
    .then(results => {
        console.log("Data from servers:", results);
    })
    .catch(error => {
        console.error("Failed to fetch data from servers:", error);
    });
