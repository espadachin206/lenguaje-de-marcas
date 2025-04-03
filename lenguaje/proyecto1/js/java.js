const profileImage = document.getElementById('nacho');

profileImage.addEventListener('mouseover', () => {
    profileImage.style.boxShadow = '0 0px 1000px rgba(9,9,9,9)';
    profileImage.src = "../imagenes/gtr-35-white.jpg";

});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.boxShadow = 'none';
    profileImage.src = "../imagenes/koenigsegg-jesko-absolut.webp";

});


var chageNameColorButton = document.getElementById('changeNameButton');

var fullNameH1 = document.getElementById('fullName');
const Name = fullNameH1.textContent;

chageNameColorButton.addEventListener('click',() => {
    console.warn("click ------------");
    alert("los tralaleritos dicen: tralalá!");
    if(fullNameH1.style.color === ""){
        fullNameH1.style = "color: orange; font-style: italic;";
        fullNameH1.innerHTML = "1º DAW";
    } else {
        fullNameH1.style = "";
        fullNameH1.innerHTML = Name;
    }
});


mostrar.addEventListener('click',() => {
    console.warn("click-------");
    alert("bombardiro crocodilo");

    if(fullNameH1.style.display === "none"){
        fullNameH1.style.display = "block";
    } else{
        fullNameH1.style.display = "none";
    }
});

const profileColorName = document.getElementById('boton');