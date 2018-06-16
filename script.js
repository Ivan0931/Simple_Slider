let sumWidth = 0,
    btnPrev = document.getElementById('prev'),
    btnNext = document.getElementById('next'),
    widthContainer = document.getElementById('container').offsetWidth,
    heightContainer = document.getElementById('container').offsetHeight,
    widthItem = document.getElementsByClassName('item'),
    widthAll = document.getElementById('container__blocks');

Array.from(widthItem).forEach(element => {
  element.style.width = widthContainer + "px";
  element.style.height = heightContainer + "px";
  sumWidth += widthContainer;

});

widthAll.style.width = sumWidth + "px";

btnNext.addEventListener("click", function(event) {
    if (Math.abs(widthAll.offsetLeft) <= widthContainer)
     widthAll.style.left = widthAll.offsetLeft - widthContainer + "px";
  else
    event.preventDefault();
});

btnPrev.addEventListener("click", function() {
  if (widthAll.offsetLeft == 0)
    event.preventDefault();
  else
    widthAll.style.left = widthAll.offsetLeft + widthContainer + "px";
});