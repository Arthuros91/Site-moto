const reponse = await fetch('motos.json');
const motos = await reponse.json();


const section = document.querySelector(".moto");

//titre
const motoSectionTitre = document.createElement("h2");
motoSectionTitre.innerText = "Liste de Motos";
section.appendChild(motoSectionTitre);

//grid
const motoGrid = document.createElement("section");
motoGrid.className= "moto_grid";
section.appendChild(motoGrid);

//Cases
function générerPage(motos){

for (let i = 0; i < motos.length; i++){

    const moto = motos[i];
    const motoCase = document.createElement("div");
    motoCase.className = "moto_case";
    motoGrid.appendChild(motoCase);

    const motoTitre = document.createElement("h3");
    motoTitre.innerText = moto.nom;
    const motoMarque = document.createElement("h4");
    motoMarque.innerText = moto.marque;
    const motoImg = document.createElement("img");
    motoImg.src = moto.img;

    motoCase.appendChild(motoImg);
    motoCase.appendChild(motoTitre);
    motoCase.appendChild(motoMarque);

}
}

function updatePage(moto){
    motoGrid.innerHTML = "";
    générerPage(moto);
}

générerPage(motos);

// BOUTONS


    /*All motos */

const btnAllMotos = document.querySelector(".all_motos");
btnAllMotos.addEventListener("click",function(){
    updatePage(motos);
});


    /*Ducati */

const btnDucati = document.querySelector(".ducati");

btnDucati.addEventListener("click",function(){
    const listMotosDucati = motos.filter(function(moto){
        return moto.marque === "Ducati";
    });
    motoGrid.innerHTML = "";
    générerPage(listMotosDucati);
    });


    /*Kawasaki */

const btnKawasaki = document.querySelector(".kawasaki");
btnKawasaki.addEventListener("click",function(){
    const listMotosKawa = motos.filter(function(moto){
        return moto.marque === "Kawasaki";
    });
    motoGrid.innerHTML = "";
    générerPage(listMotosKawa);
    });


    /* Suzuki */

const btnSuzuki = document.querySelector(".suzuki");
btnSuzuki.addEventListener("click",function(){
    const listMotosSuzuki = motos.filter(function(moto){
        return moto.marque === "Suzuki";
    });
    motoGrid.innerHTML = "";
    générerPage(listMotosSuzuki);
    });


    /* KTM */

const btnKTM = document.querySelector(".ktm");
btnKTM.addEventListener("click",function(){
    const listMotosKTM = motos.filter(function(moto){
        return moto.marque === "KTM";
    });
    motoGrid.innerHTML = "";
    générerPage(listMotosKTM);
    });

