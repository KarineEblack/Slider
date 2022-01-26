var slideIndex=1;
showSlides(slideIndex);
function plusSlide(n){
  showSlides(slideIndex+=n);
}
function currentSlide(n){
  showSlides(slideIndex=n);
}
 
function showSlides(n){
  var i;
  var imgSlides = document.getElementsByClassName("imgSlides");
  var circle = document.getElementsByClassName("circle")
  if(n>imgSlides.length){
    slideIndex=1;
  }
  if(n<1){
    slideIndex=imgSlides.length;
  }
  for(i=0; i<imgSlides.length; i++){
    imgSlides[i].style.display="none";
  }
  for(i=0;i<circle.length; i++){
 
    circle[i].className=circle[i].className.replace
      ("active","");
  }
  imgSlides[slideIndex-1].style.display="block";
  circle[slideIndex -1].className+=" active";
}




