var bgscroll=document.getElementById("bgscroll");
window.onscroll =function(){
    var scrollPos=window.pageYOffset;
    bgscroll.style.backgroundPositionY= -((scrollPos /20)-5) + "px" ;
};

var pgNo;
// function goTo('pgNo')
// {
// var services=document.getElementById("pgNo");
// console.log('a');
// window.scroll(
//    { top= services.offsetTop}
// );
// }
function goTo(pageName) {
    var container = document.getElementById(pageName);
    window.scroll({
        top: (container.offsetTop)-60,
        behavior: 'smooth'
    });
}