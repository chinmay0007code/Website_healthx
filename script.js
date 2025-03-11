// Theme Toggle Script
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check if theme is stored in local storage
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.innerHTML = "☀️"; // Sun icon for light mode
}

// Toggle Theme on Click
themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "🌙"; // Moon icon for dark mode
    } else {
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "☀️"; // Sun icon for light mode
    }
});

// Apply styles for light mode
const lightModeStyles = document.createElement("style");
lightModeStyles.innerHTML = `
    .light-mode {
        background-color: #ffffff;
        color: #000;
    }
    .light-mode .navbar {
        background-color: #f1f1f1;
        color: #000;
    }
    .light-mode button {
        background-color: #0056b3;
        color: white;
    }
    .light-mode #theme-toggle {
        color: black; /* Ensures toggle button is visible in light mode */
    }
`;
document.head.appendChild(lightModeStyles);