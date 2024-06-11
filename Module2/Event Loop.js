"use strict";

function fetchDataWithTimeout(apiURL, timeout) {
    return new Promise((resolve, reject) => {
        const fetchDataPromise = fetch(apiURL);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error("Request timeout"));
            }, timeout);
        });

        Promise.race([fetchDataPromise, timeoutPromise])
            .then(response => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject(new Error(`HTTP error! Status: ${response.status}`));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

const apiUrl = "https://api.example.com/data";
const requestTimeout = 5000;

fetchDataWithTimeout(apiUrl, requestTimeout)
    .then(data => {
        console.log("Data from API:", data);
    })
    .catch(error => {
        console.error("Error fetching data from API:", error);
    });
