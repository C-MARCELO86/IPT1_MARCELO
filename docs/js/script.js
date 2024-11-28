document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    // Toggle active class on navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active"); // Adds active class when clicked
            
            // Prevent default navigation to allow style change before redirection
            event.preventDefault(); // Prevent the link from navigating immediately
            link.style.color = "red"; // Change the font color of the clicked link to red

            // Wait a moment and then navigate to the target page
            setTimeout(() => {
                window.location.href = link.href; // Navigate after color change
            }, 200); // Delay the navigation to allow color change to be visible
        });
    });

    // Show alert when intro-text h1 is clicked
    const introText = document.querySelector(".intro-text h1");
    introText.addEventListener("click", () => {
        alert("Welcome to Crisamuel Marcelo's Portfolio!"); // Alert on click
    });

    // Show alert when profile picture is clicked
    const profilePicture = document.querySelector(".profile-picture img");
    profilePicture.addEventListener("click", () => {
        alert("Welcome to Crisamuel Marcelo's Portfolio!"); // Alert on click
    });
});
