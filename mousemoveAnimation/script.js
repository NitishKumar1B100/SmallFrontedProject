document.addEventListener('mousedown',()=>{
    draw();
});
document.addEventListener('mouseup',()=>{
    console.log('now')
})
function draw(){
    document.addEventListener('mousemove',(e)=>{
        let div = document.createElement('div');
        div.classList.add('boxs');
        document.body.append(div);
        div.style.left = e.clientX - 50 + 'px';
        div.style.top = e.clientY - 50 + 'px';
        setInterval(()=>{
            div.classList.add('hidefig');
        },1000)
        console.log(div.style.cssText)
    })
}