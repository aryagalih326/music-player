const data="music-list.js"

function search() {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    data.forEach(item => {
        if (item.toLowerCase().includes(query)) {
            const li = document.createElement("li");
            li.textContent = item;
            searchResults.appendChild(li);
        }
    });
}
