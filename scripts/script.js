portfolioAll.onclick=function(){
    bar.className=("bar state-1");
}
portfolioFramework.onclick=function(){
    bar.className=("bar state-2");
}
portfolioValina.onclick=function(){
    bar.className=("bar state-3");
}
window.onscroll=function(){
    if(window.scrollY>0){
        topNavBar.classList.add('active')
    }else{
        topNavBar.classList.remove('active')
    }
}
var liTags=document.getElementsByClassName("subMean");
for(var i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function(x){
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave=function(x){
        x.currentTarget.classList.remove('active')
    }
}
let aTags=document.querySelectorAll('nav.meau>ul>li.subMean>a')

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i=0;i<aTags.length;i++){
    aTags[i].onclick=function(x){
        x.preventDefault()
        let a=x.currentTarget
        let href=a.getAttribute('href')
        let element=document.querySelector(href)
        let top=element.offsetTop


        let currentTop=window.scrollY
        var targetTop=top-80
        var distance=targetTop-currentTop
        var t=Math.abs(distance/100*300) 
        if(t>500){
            t=500
        }
        var coords = { y: currentTop}; 
        var tween = new TWEEN.Tween(coords) 
                .to({ y: targetTop}, t) 
                .easing(TWEEN.Easing.Quadratic.InOut) 
                .onUpdate(function() { 
                    window.scrollTo(0,coords.y)
                })
                .start();
    }
}




