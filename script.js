 // Welcome Message
console.log("Welcome to Parul Sharma's Portfolio!");

// Select all navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Add active effect on click
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        
        // Remove active class from all links
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to clicked link
        this.classList.add("active");
    });
});

// About Me Button
const aboutBtn = document.querySelector('#home a');

aboutBtn.addEventListener("click", () => {
    alert("Welcome! Learn more about me below.");
});