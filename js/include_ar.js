function includeHTML(file, elementId, callback) {
    const basePath = window.location.origin; // Absolute path to the root of your site
    const fullPath = `${basePath}/${file}`;

    fetch(fullPath)
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch file: " + fullPath);
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
            if (callback) callback(); // Execute the callback after content is loaded
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML('partials/header_ar.html', 'header-placeholder', () => {
        console.log('Header loaded');
        // Attach event listeners for the dynamically loaded content
        const button = document.getElementById('toggle-menu');
        if (button) {
            button.addEventListener('click', function () {
                console.log('Menu button clicked');
                const nav = document.querySelector('#logo-and-nav-mobile nav');
                if (nav) {
                    nav.classList.toggle('show');
                }
            });
        }
    });

    includeHTML('partials/footer_ar.html', 'footer-placeholder');
});
