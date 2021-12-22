const elems = document.getElementsByClassName("nav-icon");
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
  element.style.padding = "7vh 3vw"
  element.style.margin = "5vh 0px 5vh 0px"
  let sub = element.firstElementChild
  sub.style.display = "block"
}
function mouseout(element){
  if (element.id == current_dict['current'].id+'-icon') {
    return
  }else {
    element.style.width = "0px"
    element.style.height = "0px"
    element.style.padding = "4vh 9px"
    element.style.margin = "6vh 5px 6vh 10px"
    let sub = element.firstElementChild
    sub.style.display = "none"
  }
}

const options = {
  root: null,
  threshold: 0.2
}

const observer = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry => {
    if (entry.isIntersecting){
      if (current_dict['prev_current'] !== undefined) {
        current_dict['prev_current'] = element
      }
      let colour = window.getComputedStyle(entry.target).backgroundColor
      // let colour = entry.target.style.backgroundColor
      navbar.style.backgroundColor = colour;
      current_dict['current'] = entry.target
      element = document.getElementById(current_dict['current'].id+"-icon")
      mouseover(element)
      if (current_dict['prev_current'] == undefined) {
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

Array.from(elems).forEach(element => {
  element.onmouseover = function() {mouseover(element)};
  element.onmouseout = function() {mouseout(element)};
});
