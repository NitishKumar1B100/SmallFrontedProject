let allSlide = document.querySelectorAll('.sliders div');

let SlideIndex = 1;
slide(SlideIndex);
function currentSLide(n){
    slide(SlideIndex = n);
}
function nextSlide(n){
    slide(SlideIndex += n);
}
function slide(n){
    allSlide.forEach((img)=>{
        img.style.display = 'none';
    });
    if(n > allSlide.length){SlideIndex = 1}
    if(n < 1){SlideIndex = allSlide.length}
    allSlide[SlideIndex - 1].style.display = 'block';
}