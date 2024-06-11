"use strict";

function fetchDataFromAPI(apiURL) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from API: ${apiURL}`);
        }, Math.random() * 2000);
    });
}

async function fetchAllDataFromAPIs(apiURLs) {
    try {
        const promises = apiURLs.map(url => fetchDataFromAPI(url));
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error("Error fetching data from APIs:", error);
        throw error;
    }
}

const apiURLs = ["https://api1.example.com", "https://api2.example.com", "https://api3.example.com"];

fetchAllDataFromAPIs(apiURLs)
    .then(results => {
        console.log("Combined results:", results);
    })
    .catch(error => {
        console.error("Failed to fetch data from APIs:", error);
    });
