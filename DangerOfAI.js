document.addEventListener("DOMContentLoaded", function () {
    // 1. Removed the hardcoded class="active" and added IDs to match your object
    const navbarHTML = `
    <ul class="merriweather1">
        <li><a href="index.html" id="nav-home">Home</a></li>
        <li><a href="DangerOfAIGAME.html" id="nav-game">Game</a></li>
        <li><a href="#contact" id="nav-contact">Contact</a></li>
        <li style="float:right"><a href="#about" id="nav-about">About</a></li>
    </ul>
    `;

    // Inject the navbar into the placeholder
    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }

    // Get the current filename and handle capitalization
    let currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    // Fix: Make sure it catches both uppercase "Index.html" and lowercase "index.html"
    if (currentPage.toLowerCase() === "index.html") {
        currentPage = "index.html"; 
    }

    // 2. Updated keys and values to exactly match the HTML IDs above
    const navLinks = {
        "index.html": "nav-home",
        "DangerOfAIGAME.html": "nav-game",
        "contact.html": "nav-contact",
        "about.html": "nav-about"
    };

    const activeId = navLinks[currentPage];
    if (activeId) {
        const activeLink = document.getElementById(activeId);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
});
