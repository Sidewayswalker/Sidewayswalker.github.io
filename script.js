const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });
    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
    });


    // Function to handle click events
function handleClick(event) {
    alert(`You clicked on ${event.target.textContent.trim()}`);
}

// Add event listeners to each menu link
document.getElementById('home').addEventListener('click', handleClick);
document.getElementById('project-board').addEventListener('click', handleClick);
document.getElementById('learning-growth').addEventListener('click', handleClick);
document.getElementById('technical-skills').addEventListener('click', handleClick);
