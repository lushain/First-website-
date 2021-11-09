function scroll(element) {
  var temp = element.id
  temp = temp.slice(0, -5);
  document.getElementById(temp).scrollIntoView({behavior: 'smooth'});
}

const elems = document.getElementsByClassName("nav-icon");

Array.from(elems).forEach(element => {
  element.onclick = function() {scroll(element)};
});
//
window.addEventListener('scroll',function(){
  let offset = window.pageYOffset;
  const navBar = document.getElementById("nav-bar");
  if (offset < 769) {
    navBar.style.backgroundColor = "#212121";

  } else if (769 <= offset && offset < 1538) {
    navBar.style.backgroundColor = "#0040ff";

  } else if (1538 <= offset && offset < 2307) {
    navBar.style.backgroundColor = "#b57c00";

  } else if (2307 <= offset && offset < 3076) {
    navBar.style.backgroundColor = "#10a100";

  } else if (3076 <= offset && offset < 3845) {
    navBar.style.backgroundColor = "#8c1212";

  } else if (3845 <= offset && offset < 4614) {
    navBar.style.backgroundColor = "#636363";
  }
});
