const elems = document.getElementsByClassName("nav-icon");
const sections = document.getElementsByTagName('section');
const navbar = document.getElementById('nav-bar');

function scroll(element) {
  var temp = element.id
  temp = temp.slice(0, -5)
  document.getElementById(temp).scrollIntoView({behavior: 'smooth', block:'center'});
}

function mouseover(element){
  element.style.padding = "8vh 3vw"
  element.style.margin = "5vh 0px 5vh 10px"
  let sub = element.firstElementChild
  sub.style.display = "block"
}
function mouseout(element){
  element.style.width = "0px"
  element.style.height = "0px"
  element.style.padding = "4vh 9px"
  element.style.margin = "8vh 5px 8vh 0px"
  let sub = element.firstElementChild
  sub.style.display = "none"
}

const options = {
  root: null,
  threshold: 0.2
}

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

Array.from(elems).forEach(element => {
  element.onclick = function() {scroll(element)};
});

Array.from(elems).forEach(element => {
  element.onmouseover = function() {mouseover(element)};
  element.onmouseout = function() {mouseout(element)};
});
