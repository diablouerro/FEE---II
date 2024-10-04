const body = document.querySelector('body');

// inserting header
const header = document.createElement('header');
body.appendChild(header);

const h1 = document.createElement('h1');
h1.innerHTML = "Tarandeep Singh";
header.appendChild(h1);

const nav = document.createElement('nav');
header.appendChild(nav);
const ul = document.createElement('ul');
nav.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

const a1 = document.createElement('a');
a1.innerHTML = "About";
const a2 = document.createElement('a');
a2.innerHTML = "Portfolio";
const a3 = document.createElement('a');
a3.innerHTML = "Contact";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

const about = document.createElement('section');
about.id = 'about';
body.appendChild(about);

const h2 = document.createElement('h2');
h2.innerHTML = "Hi, I'm an 18-year-old student currently pursuing a Bachelor of Engineering in Computer Science and Engineering at Chitkara University. I'm passionate about open-source development and love working with Data Structures and Algorithms (DSA). I've built projects like a typing speed testing website and a to-do list app, and I've earned a 5-star rating in C++ on HackerRank. Solving over 100 DSA problems on LeetCode has really helped me strengthen my coding skills.";
about.appendChild(h2);

const p = document.createElement('p');
p.innerHTML = "I'm also part of my university's programming club and enjoy contributing to events and workshops. Recently, I had the opportunity to speak at an event, which helped me overcome my stage fear. My goal is to continue growing and eventually become a software engineer.";
about.appendChild(p);


const portfolio = document.createElement('section');
body.appendChild(portfolio);
const port_h2 = document.createElement('h2');
port_h2.innerHTML = "Portfolio";
const gallery = document.createElement('div');
gallery.className = "gallery";

const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
img1.src = "./images/html.jpg";
img2.src = "./images/css.jpg";
img3.src = "./images/js.png";
img1.alt = "html_logo";
img2.alt = "css_logo";
img3.alt = "js_logo";
gallery.appendChild(img1);
gallery.appendChild(img2);
gallery.appendChild(img3);

portfolio.appendChild(port_h2);
portfolio.appendChild(gallery);

const contact = document.createElement('section');
contact.id = "contact";
body.appendChild(contact);

const con_h2 = document.createElement('h2');
con_h2.innerHTML = "9646272307";

const con_p = document.createElement('p');
con_p.innerHTML = "tarandeep2228.be23@chitkara.edu.in";
contact.appendChild(con_h2);
contact.appendChild(con_p);

const footer = document.createElement('footer');
body.appendChild(footer);

const footer_p = document.createElement('p');
footer_p.innerHTML = "&copy; 2024 My Website";
footer.appendChild(footer_p);