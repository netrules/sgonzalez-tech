const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function setSpecificTheme(_theme) {
    if (_theme == "dark"){
        setDarkTheme();
    } else {
        setLightTheme();
    }
}

function setDarkTheme() {
  localStorage.setItem("colorscheme", "dark");
  body.classList.add('colorscheme-dark');
  body.classList.remove('colorscheme-light');
}

function setLightTheme() {
  localStorage.setItem("colorscheme", "light");
  body.classList.add('colorscheme-light');
  body.classList.remove('colorscheme-dark');
}

body.classList.remove('colorscheme-auto'); // temp fix
if (localStorage.getItem("colorscheme")) {
    setSpecificTheme(localStorage.getItem("colorscheme"));
} else {
    setSpecificTheme(darkModeMediaQuery.matches ? "dark" : "light");
}

darkModeToggle.addEventListener('click', function(event) {
    setSpecificTheme(body.classList.contains("colorscheme-dark") ? "light" : "dark");
});
