function closeNav() {
    $('.navbar-collapse').collapse('hide');
    window.history.back();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = document.getElementById('searchInput').value;
        performSearch(query);
    });
});

function performSearch(query) {
    console.log('Searching for:', query);

    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    if (query) {
        const resultItem = document.createElement('li');
        resultItem.textContent = `Result for "${query}"`;
        resultsList.appendChild(resultItem);
    }
}