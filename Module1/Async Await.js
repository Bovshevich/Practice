"use strict";


async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error;
    }
}

(async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    try {
        const result = await fetchData(apiUrl);
        console.log("Fetched data:", result);
    } catch (error) {
        console.error("Error:", error);
    }
})();
