const elems = document.getElementsByClassName("scroll-icon");
const nav = document.getElementsByClassName("exc");
const sections = document.getElementsByTagName('section');
const navbar = document.getElementById('nav-bar');
let element = null

var current_dict = {
  prev_current: undefined,
  current: undefined,
}

function scroll(element) {
  var temp = element.id
  temp = temp.slice(0, -5)
  document.getElementById(temp).scrollIntoView({behavior: 'smooth', block:'center'});
}

function mouseover(element){
  element.style.borderRadius = "10px"
  let sub = element.firstElementChild.firstElementChild
  sub.style.width = "50px"
}
function mouseout(element){
  if (element.id === current_dict['current'].id+'-icon') {
    return
  }else {
    element.style.borderRadius = "2em"
    let sub = element.firstElementChild.firstElementChild
    sub.style.width = "40px"
  }
}

function navOut(){
  navbar.style.transform = "translateX(-150px)"
}

function navIn(){
  navbar.style.transform = "translateX(0px)"
}

const options = {
  root: null,
  threshold: 0.5
}

const observer = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry => {
    if (entry.isIntersecting){
      if (current_dict['prev_current'] !== undefined) {
        current_dict['prev_current'] = element
      }
      // let colour = window.getComputedStyle(entry.target).backgroundColor
      // navbar.style.backgroundColor = colour;
      if (entry.target.id !== "home"){
        navIn()
      }else {
        navOut()
      }
      current_dict['current'] = entry.target
      element = document.getElementById(current_dict['current'].id+"-icon")
      mouseover(element)
      if (current_dict['prev_current'] === undefined) {
        current_dict['prev_current'] = element
      } else if (current_dict['prev_current'] !== element && current_dict['prev_current'] !== undefined) {
        mouseout(current_dict['prev_current'])
      }
    }
  });
},options);

Array.from(sections).forEach(section => {
  observer.observe(section);
});

Array.from(elems).forEach(element => {
  element.onclick = function() {scroll(element)};
});

Array.from(nav).forEach(element => {
  element.onmouseover = function() {mouseover(element)};
  element.onmouseout = function() {mouseout(element)};
});
