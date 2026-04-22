/* ============================================================
   WELCOME MESSAGE
   Display an alert when the page loads
   ============================================================ */
alert("Welcome to my portfolio! - Jaime Garcia");

/* ============================================================
   ABOUT SECTION TOGGLE
   Handles the "Read more / Show less" functionality
   ============================================================ */

/* Select DOM elements */
const aboutText = document.getElementById("about-text");
const btnAbout = document.getElementById("btn-toggle-about");

/* Define text states */
const shortText = "My name is Jaime Garcia, I am 23 years old and I consider myself a deeply curious person. Click Read more to know more about me.";
const fullText = aboutText.textContent;

/* Track toggle state */
let isExpanded = false;

/* Initialize with short text */
aboutText.textContent = shortText;

/* Toggle text on button click */
btnAbout.addEventListener("click", function() {
    if (isExpanded) {
        /* Collapse to short version */
        aboutText.textContent = shortText;
        btnAbout.textContent = "Read more ▼";
        isExpanded = false;
    } else {
        /* Expand to full version */
        aboutText.textContent = fullText;
        btnAbout.textContent = "Show less ▲";
        isExpanded = true;
    }
});

/* ============================================================
   EXTRA PROJECTS TOGGLE
   Show or hide additional projects section
   ============================================================ */

/* Select DOM elements */
const btnExtra = document.getElementById("btn-toggle-extra");
const extraProjects = document.getElementById("extra-projects");

/* Toggle visibility using CSS class */
btnExtra.addEventListener("click", function() {
    if (extraProjects.classList.contains("hidden")) {
        /* Show extra projects */
        extraProjects.classList.remove("hidden");
        btnExtra.textContent = "Hide extra projects ▲";
    } else {
        /* Hide extra projects */
        extraProjects.classList.add("hidden");
        btnExtra.textContent = "Show more projects ▼";
    }
});