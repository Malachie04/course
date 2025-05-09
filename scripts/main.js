

const body = document.querySelector('body');
const liste= document.querySelector('.mylist');
const bouton= document.querySelector('.btn');
const cont = document.querySelector('p');

let userEl=document.querySelector('.userSaisi');

let mylist = [];

bouton.addEventListener('click',(event)=>{
    event.preventDefault();
    let userSaisie = document.querySelector('.userSaisi').value;
    if(!userSaisie){
        document.querySelector('.userSaisi').focus();
        return;
    }else if(mylist.some(item => item.toUpperCase() === userSaisie.toUpperCase())){
        document.querySelector('.userSaisi').select();
        return;
    }


    mylist.push(userSaisie);
    Afficher();
    cont.innerHTML =`Element(s) ajouté(s) :${mylist.length}`;
    userEl.value='';
    userEl.focus();
});

function remove(event) {
    let value = event.target.getAttribute('data-value');
    console.log(value);
    mylist.splice(value, 1);
    updateList();
    Afficher();
    userEl.focus();
}

function updateList() {
    cont.innerHTML =`Element(s) ajouté(s) :${mylist.length}`;
}
function Afficher(){
    liste.innerHTML ='';
    mylist.forEach((element)=>{
        liste.innerHTML += `
        <li>${element} <button type="submit" class="supprimer" data-value=${mylist.indexOf(element)}><i class="fa-solid fa-trash"></i></button></li>`;
    });
    
    let btnsupprimer= document.querySelectorAll('.supprimer');
    btnsupprimer.forEach((button)=>{
       button.addEventListener('click',(event)=>{
           remove(event);
       });
   });

}

let myCourseList = [
    ["Math", "Science", "History"],
    ["English", "Art", "Music"]
];

// console.log(myCourseList);


const addCourse=(descrition,montant,categorie)=>{

    myCourseList.push([descrition,montant,categorie]);

}

console.log(addCourse("Course personnelle",2000,"Diversement"));