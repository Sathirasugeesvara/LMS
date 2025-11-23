//for good morning in <section id="boxone" >
/*const now = new Date();
const hour = now.getHours();

if (hour < 12) {
  alert("🌞 Good Morning!");
} else if (hour <= 18) {
  alert("🌤️ Good Afternoon!");
} else if(hour<=21){
  alert("🌇 Good Evening!");
}else{
  alert("🌙 Good Night!");
}*/


function changeMode() {
  //const navbar = document.querySelector('.navbar');
  const icon = document.getElementById('themeIcon');
  const body = document.body;
  const footer = document.querySelector('footer'); 
  const popular = document.getElementById("popularcourses");
  const features = document.getElementById("features");
  const boxone = document.getElementById("boxone");

  // Toggle dark mode background
  body.classList.toggle('bodyDark');
  //if (navbar) navbar.classList.toggle('dark');
  if (footer) footer.classList.toggle('footerDark'); // Only toggle if footer exists
  if (popular) popular.classList.toggle("dark");
  if (features) features.classList.toggle("dark");
  if (boxone) boxone.classList.toggle("dark");

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => card.classList.toggle('dark'));

  if (icon.getAttribute('data-mode') !== 'sun') {
    // Change icon to sun
    icon.innerHTML = `
      <path d="M8 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 0zm4.95 2.05a.5.5 0 0 1 .707 0l.708.708a.5.5 0 0 1-.708.707l-.707-.707a.5.5 0 0 1 0-.708zM16 8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1A.5.5 0 0 1 16 8zm-2.05 4.95a.5.5 0 0 1 0 .707l-.708.708a.5.5 0 1 1-.707-.708l.707-.707a.5.5 0 0 1 .708 0zM8 16a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1A.5.5 0 0 1 8 16zm-4.95-2.05a.5.5 0 0 1-.707 0l-.708-.708a.5.5 0 1 1 .708-.707l.707.707a.5.5 0 0 1 0 .708zM0 8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 0 8zm2.05-4.95a.5.5 0 0 1 0-.707l.708-.708a.5.5 0 0 1 .707.708l-.707.707a.5.5 0 0 1-.708 0zM8 3a5 5 0 1 1 0 10A5 5 0 0 1 8 3z"/>
    `;
    icon.setAttribute('data-mode', 'sun');
  } else {
    // Change icon to moon
    icon.innerHTML = `
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
    `;
    icon.setAttribute('data-mode', 'moon');
  }
}

