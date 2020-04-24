const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (localStorage.getItem("colorscheme")) {
  if (localStorage.getItem("colorscheme") == "dark"){
    setDarkTheme();
  } else {
    setLightTheme();
  }
} else if (darkModeToggle.matches) {
  setDarkTheme();
} else {
  setLightTheme();
}

darkModeToggle.addEventListener('click', function(event) {
  if (body.classList.contains("colorscheme-auto")) {
    body.classList.remove('colorscheme-auto');
    if(darkModeMediaQuery.matches) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
  } else {
    if (body.classList.contains("colorscheme-dark")) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
  }
});

//darkModeMediaQuery.addListener((e) => {
//  if (e.matches) {
//    setDarkTheme();
//  } else {
//    setLightTheme();
//  }
//});

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
