document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const resultsList = document.getElementById('results');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim();
        if (query.length === 0) {
            resultsList.innerHTML = '';
            return;
        }
        
        fetch(`./php/public/index.php?query=${query}`)
            .then(response => response.json())
            .then(data => {
                // Filter data based on user input
                const filteredData = data.filter(comment => comment.name.toLowerCase().includes(query.toLowerCase()));
                
                // Render filtered data
                renderResults(filteredData);
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    function renderResults(data) {
        resultsList.innerHTML = '';
        data.forEach(comment => {
            const listItem = document.createElement('li');
            listItem.textContent = comment.name;
            resultsList.appendChild(listItem);
        });
    }
});
