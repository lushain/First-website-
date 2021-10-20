function scroll(element) {
  console.log(element)
  var temp = element.id
  temp = temp.slice(0, -5);
  document.getElementById(temp).scrollIntoView({behavior: 'smooth'});
}

var current = 1
const elems = document.getElementsByClassName("nav-icon")

Array.from(elems).forEach(element => {
  element.onclick = function() {scroll(element)};
});
