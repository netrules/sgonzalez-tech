---
title: About Santiago
slug: about

---

## Small Bio
- Interested in usability & ergonomy. UX and HCI are a must.
- Dedicated & resourceful, able to develop or solve algorithms.
- Proud of my profession and enjoy working in it.

## Skillset

<style>


.grid i {
    font-size: 8rem;
    padding: 15px;
    display:inline-block;
}

.grid svg {
    width:100px;
    height:100px;
    margin: auto;
}

.grid > li {
    list-style: none;
    /* display:inline-block; */
    background: #eee;
    margin: 0.5px;
    width: 127px;
    height: 128px;
    display: inline-flex;
    box-shadow: inset 1px 1px 5px 3px #706677;
}

.grid {
  max-width: 95%;
  width:768px;
  margin: 0 auto;
  padding: 1px;
  background: #ddd;
  text-align: center;
    flex-wrap: wrap;
    display: flex;
}

.button {
  display: inline-block;
  padding: 0.5em 1.0em;
  background: #EEE;
  border: none;
  border-radius: 7px;
  background-image: linear-gradient( to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.2) );
  color: #222;
  font-family: sans-serif;
  font-size: 16px;
  text-shadow: 0 1px white;
  cursor: pointer;
}

.button:hover {
  background-color: #8CF;
  text-shadow: 0 1px hsla(0, 0%, 100%, 0.5);
  color: #222;
}

.button:active,
.button.is-checked {
  background-color: #28F;
}

.button.is-checked {
  color: white;
  text-shadow: 0 -1px hsla(0, 0%, 0%, 0.8);
}

.button:active {
  box-shadow: inset 0 1px 10px hsla(0, 0%, 0%, 0.8);
}

/* ---- button-group ---- */

.button-group {
  margin-bottom: 20px;
  display: inline-block;
}

.button-group:after {
  content: '';
  display: block;
  clear: both;
}

.button-group .button {
  float: left;
  border-radius: 0;
  margin-left: 0;
  margin-right: 1px;
}

details {
    text-align: center;
}

details summary, details summary * {
    text-align: left;
}

li[data-groups='["programming"]'],
 li[data-groups='["os"]'],
 li[data-groups='["git"]'] {
  box-shadow: inset 1px 1px 35px 3px #c0fdff;
}

li[data-groups='["design"]'],
 li[data-groups='["browser"]'],
 li[data-groups='["cloud"]'] {
  box-shadow: inset 1px 1px 35px 3px #fee440;
}

li[data-groups='["other"]'] {
  box-shadow: inset 1px 1px 35px 3px #ffcbf2;
}

@media screen and (min-width: 769px) {
    /* STYLES HERE */
}

@media screen and (min-device-width: 640px) and (max-device-width: 768px) { 
    .grid {
        width: 640px;
        max-width: 100vw;
        left:0;
    }
}

@media screen and (min-device-width: 512px) and (max-device-width: 639px) { 
    .grid {
        width: 512px;
        max-width: 100vw;
        left:0;
    }
}

@media screen and (min-device-width: 384px) and (max-device-width: 511px) { 
    .grid {
        width: 384px;
        max-width: 100vw;
        left:0;
    }
}

@media screen and (min-device-width: 256px) and (max-device-width: 383px) { 
    .grid {
        width: 256px;
        max-width: 100vw;
        left:0;
    }
}

@media only screen and (max-device-width: 255px) {
    .grid {
        width: 128px;
        max-width: 100vw;
        left:0;
    }
}

</style>

<details>
<summary>
    <h3 style="display:inline-block; margin:1.6rem 0 1.6rem 0;">Development</h3>
</summary>
<p>

<div class="filters button-group">
<button class="button is-checked" data-filter='all' data-set='0'>show all</button>
<button class="button" data-filter='programming' data-set='0'>programming</button>
<button class="button" data-filter='design' data-set='0'>design</button>
<button class="button" data-filter='other' data-set='0'>server / managers / libraries</button>
</div>

<ul class="grid">
<li data-groups='["other"]'> <i class="devicon-apache-line-wordmark colored"></i></li>
<li data-groups='["design"]'> <i class="devicon-bootstrap-plain-wordmark colored"></i></li>
<li data-groups='["design"]'> <span class="iconify" data-icon="logos:bulma" data-inline="false"></span> </li>
<li data-groups='["programming"]'> <i class="devicon-c-plain colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-cplusplus-plain-wordmark colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-csharp-line colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-css3-plain-wordmark colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-dot-net-plain-wordmark colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-go-line colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-html5-plain-wordmark colored"></i></li>
<li data-groups='["design"]'><span class="iconify" data-icon="logos:hugo" data-inline="false"></span> </li>
<li data-groups='["programming"]'> <i class="devicon-java-plain-wordmark colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-javascript-plain colored"></i></li>
<li data-groups='["design"]'><span class="iconify" data-icon="logos:jekyll" data-inline="false"></span> </li>
<li data-groups='["programming"]'> <i class="devicon-jquery-plain-wordmark colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-less-plain-wordmark colored"></i></li>
<li data-groups='["design"]'> <span class="iconify" data-icon="logos:material-ui" data-inline="false"></span> </li>
<li data-groups='["other"]'> <i class="icon-maven" style="color:#ff6804;"></i></li>
<li data-groups='["other"]'><span class="iconify" data-icon="logos:netlify" data-inline="false"></span> </li>
<li data-groups='["other"]'> <i class="devicon-nginx-plain-wordmark colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-nodejs-plain-wordmark colored"></i></li>
<li data-groups='["other"]'> <i class="devicon-npm-original-wordmark colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-php-plain colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-python-plain-wordmark colored"></i></li>
<li data-groups='["design"]'> <i class="devicon-react-original-wordmark colored"></i></li>
<li data-groups='["programming"]'> <i class="devicon-sass-original colored"></i></li>
<li data-groups='["other"]'> <i class="icon-spring" style="color:#6cb33e;"></i> </li>
<li data-groups='["other"]'><span class="iconify" data-icon="logos:stackbit-icon" data-inline="false"></span> </li>
<li data-groups='["other"]'> <i class="icon-tomcat" style="color:#d1a41a;"></i></li>
<li data-groups='["programming"]'> <i class="devicon-typescript-plain colored"></i></li>
<li data-groups='["design"]'> <i class="devicon-vuejs-line-wordmark colored"></i></li>
<li data-groups='["other"]'> <i class="devicon-wordpress-plain-wordmark colored"></i></li>
</ul>
</details>

<details>
<summary><h3 style="display:inline-block; margin:1.6rem 0 1.6rem 0;">SysAdmin</h3></summary>
<div class="filters button-group">
<button class="button is-checked" data-filter='all' data-set='1'>show all</button>
<button class="button" data-filter='os' data-set='1'>operating system</button>
<button class="button" data-filter='browser' data-set='1'>browser</button>
<button class="button" data-filter='other' data-set='1'>ui / ide / tools</button>
</div>

<ul class="grid">
<li data-groups='["os"]'> <i class="icon-alpinelinux" style="color:#0D597F;"></i> </li>
<li data-groups='["os"]'> <i class="devicon-android-plain-wordmark colored"></i> </li>
<li data-groups='["os"]'> <i class="devicon-apple-original"></i> </li>
<li data-groups='["os"]'> <i class="icon-archlinux" style="color:#1793d1;"></i> </li>
<li data-groups='["browser"]'> <i class="devicon-chrome-plain-wordmark"></i> </li>
<li data-groups='["os"]'> <i class="devicon-debian-plain-wordmark colored"></i> </li>
<li data-groups='["browser"]'> <span class="iconify" data-icon="logos:firefox" data-inline="false"></span> </li>
<li data-groups='["os"]'> <span class="iconify" data-icon="simple-icons:gnome" data-inline="false"></span> </li>
<li data-groups='["browser"]'> <i class="devicon-ie10-original colored"></i> </li>
<li data-groups='["os"]'> <i class="devicon-linux-plain colored"></i> </li>
<li data-groups='["os"]'> <i class="icon-linux-mint" style="color:#00e000;"></i> </li>
<li data-groups='["os"]'> <i class="devicon-redhat-plain-wordmark colored"></i> </li>
<li data-groups='["browser"]'> <i class="devicon-safari-plain-wordmark colored"></i> </li>
<li data-groups='["other"]'> <i class="devicon-ssh-plain-wordmark colored"></i> </li>
<li data-groups='["os"]'> <i class="devicon-ubuntu-plain-wordmark colored"></i> </li>
<li data-groups='["other"]'> <i class="devicon-vim-plain colored"></i> </li>
<li data-groups='["os"]'> <i class="devicon-windows8-original colored"></i> </li>
<li data-groups='["other"]'> <i class="icon-x11" style="color:black;"></i> </li>
</ul>
</details>

<details>
<summary><h3 style="display:inline-block; margin:1.6rem 0 1.6rem 0;">DevOps</h3></summary>

<div class="filters button-group">
<button class="button is-checked" data-filter='all' data-set='2'>show all</button>
<button class="button" data-filter='git' data-set='2'>git</button>
<button class="button" data-filter='cloud' data-set='2'>cloud</button>
<button class="button" data-filter='other' data-set='2'>ci / cd</button>
</div>

<ul class="grid">
<li data-groups='["other"]'> <span class="iconify" data-icon="logos:appveyor" data-inline="false"></span> </li>
<li data-groups='["cloud"]'> <i class="devicon-amazonwebservices-plain-wordmark colored"></i> </li>
<li data-groups='["cloud"]'> <span class="iconify" data-icon="logos:azure" data-inline="false"></span> </li>
<li data-groups='["git"]'> <i class="devicon-bitbucket-plain-wordmark colored"></i> </li>
<li data-groups='["other"]'> <span class="iconify" data-icon="logos:codecov" data-inline="false"></span> </li>
<li data-groups='["other"]'> <i class="devicon-docker-plain-wordmark colored"></i> </li>
<li data-groups='["git"]'> <i class="devicon-git-plain-wordmark colored"></i> </li>
<li data-groups='["git"]'> <i class="devicon-github-plain-wordmark colored"></i> </li>
<li data-groups='["git"]'> <i class="devicon-gitlab-plain-wordmark colored"></i> </li>
<li data-groups='["other"]'> <span class="iconify" data-icon="cib:gitpod" data-inline="false"></span> </li>
<li data-groups='["git"]'> <i class="icon-google-code"></i> </li>
<li data-groups='["other"]'> <span class="iconify" data-icon="logos:snyk" data-inline="false"></span> </li>
<li data-groups='["other"]'> <span class="iconify" data-icon="logos:travis-ci" data-inline="false"></span> </li>
</ul>
</details>

<details>
<summary><h3 style="display:inline-block; margin:1.6rem 0 1.6rem 0;">Databases</h3></summary>
<ul class="grid">
<li> <i class="icon-mariadb" style="color:#003545;"></i> </li>
<li> <i class="devicon-mongodb-plain-wordmark colored"></i> </li>
<li> <i class="icon-mssql" style="color:#f11513;"></i> </li>
<li> <i class="devicon-mysql-plain-wordmark colored"></i> </li>
<li> <i class="devicon-oracle-original colored"></i> </li>
<li> <i class="devicon-postgresql-plain-wordmark colored"></i> </li>
</ul>
</details>

## Software used

<details>
<summary><h3 style="display:inline-block; margin:1.6rem 0 1.6rem 0;">Productivity</h3></summary>
<ul class="grid">
<li> <i class="devicon-atom-original-wordmark colored"></i> </li>
<li> <i class="icon-codepen" style="color:#212121;"></i> </li>
<li> <i class="devicon-gimp-plain colored"></i> </li>
<li> <span class="iconify" data-icon="cib:godot-engine" data-inline="false"></span> </li>
<li> <i class="devicon-photoshop-line colored"></i> </li>
<li> <i class="devicon-sourcetree-plain-wordmark colored"></i> </li>
<li> <i class="devicon-visualstudio-plain-wordmark colored"></i> </li>
<li> <span class="iconify" data-icon="logos:unity" data-inline="false"></span> </li>
</ul>
</details>

<details>
<summary><h3 style="display:inline-block; margin:1.6rem 0 1.6rem 0;">Teamwork</h3></summary>
<ul class="grid">
<li> <i class="devicon-slack-plain-wordmark colored"></i> </li>
<li> <i class="devicon-trello-plain colored"></i> </li>
</details>

<!--
## References

- https://github.com/Vestride/Shuffle
- https://github.com/konpa/devicon/
- https://github.com/fizzed/font-mfizz
- https://iconify.design/
- https://coolors.co/
- https://clrs.cc/
-->
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.from%2CSet%2CObject.assign"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Shuffle/5.2.3/shuffle.min.js" integrity="sha512-VHIYn9ssmuPBliadBEgGCTRtCO4agkhQCxiPaTBKaAq0cm2KKpX+PE2klG1VfOHKKcN5eZcev0M3s5V2xXxVew==" crossorigin="anonymous"></script>
<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>

<script>


window.onload = function(){
    var Shuffle = window.Shuffle;
    var Shuffles = [];
    var currentFocus;

    var _shuffles = document.querySelectorAll('.grid');
    for (iter = 0; iter < _shuffles.length; ++iter) {
        element = _shuffles[iter];

        Shuffles[iter] = new Shuffle(element, {
            itemSelector: 'li',
            useTransforms: false
        });
    };

    // add events to filter buttons for each instance
    var shuffleButtons = document.querySelectorAll(".filters button");
    for (let i = 0; i < shuffleButtons.length; i++) {
        shuffleButtons[i].addEventListener("click", function(e) {
            // shouldn't need to keep using event default callback
            e.preventDefault();
            // remove no longer needed css, and set css
            this.parentElement.querySelector('.is-checked').classList.remove('is-checked');
            this.classList.add('is-checked');
            // set the filter
            var _shuffle = Shuffles[this.dataset.set];
            _shuffle.filter(this.dataset.filter);
        });
    }

    // Fetch all the details element.
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach(function(targetDetail) {
        targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
            });
            if(currentFocus != targetDetail) {
                targetDetail.scrollIntoView({behavior: "smooth", block: "start"});
                targetDetail.focus();
                currentFocus = targetDetail;
            }
        });
    });
}

</script>