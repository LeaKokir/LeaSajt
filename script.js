"use strict";
let naslov1 = document.getElementById ("naslov1");
function boja(x){
    if (x==1){
        naslov1.style.color = "brown";
        naslov1.style.transform = "scale(1.5)";
        
    }
    else if (x==2){
        naslov1.style.color = "#c0810d";
        naslov1.style.transform = "none";
    }
}

let label = document.getElementById("pitanje")
function boje(y){
    if (y=='jedan'){
        label.style.backgroundColor = "silver";
        label.style.borderRadius = "50px";
    }
    else if (y=='dva'){
        label.style.backgroundColor = "none";
        label.style.borderRadius = "none";
    }
}

function pitanje(x){ 
    if (x=='da'){
        alert ("Tacan odgovor! Med je zdraviji od secera!");
    }
    else if (x=='ne'){
        alert ("Netacan odgovor! Med sadrzi puno vitamina i minerala!");
    }
}

function tabela (){       
    let dugme = document.getElementById ("saznaj");
    dugme.style.display = "none";
    let element = ["Divlji kesten","Cvet pomorandze","Kesten","Bor","Eukaliptus","Timijan"];
    element.sort();
    let tabela = document.getElementById("tabela");
    let napravi= "";
    napravi+=`<table border= '1' width= "200px" height="150px" ><caption>Ukusi naseg meda</caption>`;
    for (let i = 0; i<element.length;i++){
        napravi += `<tr><td>${i+1}</td><td>${element[i]}</td></tr>`;
    }
    napravi+="</table>";
    tabela.innerHTML = napravi;
}

function podatak() {
    let ime = forma.ime.value;
    let prezime = forma.prezime.value;
    let email = forma.email1.value;
    ime = ime.toUpperCase();
    email = email.toLowerCase();
    if(ime.length<3 || ime.length>15)
    {
        alert ("Ime moze sadrzati izmedju 3 i 15 karaktera");
    }
    else {
        alert(`Vasi uneti podaci su \n Ime: ${ime}\n Prezime: ${prezime} \n Email: ${email}`);
    }
}

function Velicina (text) {
    return text.toUpperCase();
}


    let klizeci = document.getElementById ("klizeci");
    let ispis = `<marquee direction="left"> Drago nam je što ste nas posetili!  </marquee>`;
    klizeci.innerHTML = ispis;
