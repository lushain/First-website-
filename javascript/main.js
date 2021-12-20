function scroll(element) {
  var temp = element.id
  temp = temp.slice(0, -5);
  document.getElementById(temp).scrollIntoView({behavior: 'smooth'});
}

const elems = document.getElementsByClassName("nav-icon");

Array.from(elems).forEach(element => {
  element.onclick = function() {scroll(element)};
});

const options = {
  root: null,
  threshold: 0.6
}

const sections = document.getElementsByTagName('section');
const navbar = document.getElementById('nav-bar');

const observer = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry => {
    if (entry.isIntersecting){
      let colour = window.getComputedStyle(entry.target).backgroundColor
      // let colour = entry.target.style.backgroundColor
      navbar.style.backgroundColor = colour;
    }
  });
},options);

Array.from(sections).forEach(section => {
  observer.observe(section);
});
