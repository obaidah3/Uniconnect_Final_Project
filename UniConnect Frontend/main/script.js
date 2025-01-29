

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded successfully!");


    const searchButton = document.querySelector(".search-bar button");
    console.log("Search button element:", searchButton);
    searchButton.addEventListener("click", function() {
        const searchInput = document.querySelector(".search-bar input").value;
        console.log("Search button clicked, input value:", searchInput);
        alert(`Searching for: ${searchInput}`);
    });

    console.log("Event listeners added successfully.");
});
