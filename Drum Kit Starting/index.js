var allButtons = document.querySelectorAll('button');

for (var i = 0; i< allButtons.length; i++ ){
    allButtons[i].addEventListener('click', function(){
        this.style.color ="red";
    })
}