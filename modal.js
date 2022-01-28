window.addEventListener("load", function () {
    let btn = document.getElementById("modalBtn")
    btn.addEventListener("click", function () {
        let modal = document.getElementById("modal")
        modal.classList.toggle("hide")
    })
        let close=document.getElementById("close")
            close.addEventListener("click", function(){
                modal.classList.toggle("hide")
        })
        
    
 

});