document.addEventListener("DOMContentLoaded", function() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            
            // Highlight active link
            let links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                if (link.href === window.location.href) {
                    link.style.backgroundColor = "#555"; // Highlight color
                    link.style.fontWeight = "bold";
                }
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
