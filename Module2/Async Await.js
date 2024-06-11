"use strict";

async function fetchDataFromFirstServer() {
    return "Data from first server";
}

async function sendDataToSecondServer(data) {
    return `Result from second server using data: ${data}`;
}

async function combinedRequests() {
    try {
        const firstServerData = await fetchDataFromFirstServer();
        const result = await sendDataToSecondServer(firstServerData);
        return result;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

combinedRequests()
    .then(result => {
        console.log("Combined result:", result);
    })
    .catch(error => {
        console.error("Failed to execute combined requests:", error);
    });
