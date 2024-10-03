var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");
var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");


for (let index = 0; index < tablinks.length; index++) {
    tablinks[index].addEventListener('click', ()=>{
    hideActiveTabContent();
        tabcontents[index].classList.add('active-tab');
        
    })    
}
function hideActiveTabContent(){
    for (let index = 0; index < tabcontents.length; index++) {
    tabcontents[index].classList.remove('active-tab')
        
    }
}

function openmenu(){
    sidemenu.style.right ="0";
}
function closemenu(){
    sidemenu.style.right ="-200px";
}

