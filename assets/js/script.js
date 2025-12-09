

$(document).ready(function(){
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')
    
    
    
    $("h1").on("click", function() {
        console.log("Click")
        $(this).css({"color": "#ff23bd"});
    })
    
    $("#carta").on("dblclick", function() {
        console.log("Click")
        $(".container-carta").css({"display":"none"})
    })
    
    $("#carta").on("mouseenter", function() {
        $(".container-carta").css({"display":"block"})
    })

    const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            btnTop.style.display = "flex";
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })

})