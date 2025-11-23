function changeMode() {
  //const navbar = document.querySelector('.navbar');
  const body = document.body;
  const boxone = document.getElementById("boxone");

  // Toggle dark mode background
  body.classList.toggle('bodyDark');
  //if (navbar) navbar.classList.toggle('dark');
  if (boxone) boxone.classList.toggle("dark");
}