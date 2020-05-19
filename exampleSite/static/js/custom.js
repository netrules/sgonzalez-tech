const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
var vantaholder = null;

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
  if(window.isHomePage) {
    if(vantaholder != null) vantaholder.destroy();
    vantaholder = VANTA.NET({
    el: ".content",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    // color: 0xff0068, // or 0xff00
    // backgroundColor: 0xffffff, // black bg?
    color: 0xff00, // or 0xff00
    backgroundColor: 0x212121, // black bg?
    points: 12.00,
    maxDistance: 22.00,
    spacing: 18.00,
    showDots: false
    });
  }
}

function setLightTheme() {
  localStorage.setItem("colorscheme", "light");
  body.classList.add('colorscheme-light');
  body.classList.remove('colorscheme-dark');
  if(window.isHomePage) {
    if(vantaholder != null) vantaholder.destroy();
    vantaholder = VANTA.NET({
    el: ".content",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xff0068, // or 0xff00
    backgroundColor: 0xfafafa, // black bg?
    // color: 0xff00, // or 0xff00
    // backgroundColor: 0xfafafa, // black bg?
    points: 12.00,
    maxDistance: 22.00,
    spacing: 18.00,
    showDots: false
    });
  }
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
console.log(window.isHomePage);
