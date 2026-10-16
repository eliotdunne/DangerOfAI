document.addEventListener("DOMContentLoaded", function () {
    // 1. Removed the hardcoded class="active" and added IDs to match your object
    const navbarHTML = `
    <ul class="merriweather1">
        <li><a href="index.html" id="nav-home">Danger of AI</a></li>

        <li style="float:right"><a href="#about" id="nav-about">About</a></li>
        <li style="float:right"><a href="DangerOfAIGAME.html" id="nav-game">Game</a></li>
    </ul>
    `;

  
    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    }

   
    let currentPage = window.location.pathname.split("/").pop() || "index.html";
    
   
    if (currentPage.toLowerCase() === "index.html") {
        currentPage = "index.html"; 
    }

    
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
