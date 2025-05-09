

// const body = document.querySelector('body');
// const liste= document.querySelector('.mylist');
// const bouton= document.querySelector('.btn');
// const cont = document.querySelector('p');

// let userEl=document.querySelector('.userSaisi');

// let mylist = [];

// bouton.addEventListener('click',(event)=>{
//     event.preventDefault();
//     let userSaisie = document.querySelector('.userSaisi').value;
//     if(!userSaisie){
//         document.querySelector('.userSaisi').focus();
//         return;
//     }else if(mylist.some(item => item.toUpperCase() === userSaisie.toUpperCase())){
//         document.querySelector('.userSaisi').select();
//         return;
//     }


//     mylist.push(userSaisie);
//     Afficher();
//     cont.innerHTML =`Element(s) ajouté(s) :${mylist.length}`;
//     userEl.value='';
//     userEl.focus();
// });

// function remove(event) {
//     let value = event.target.getAttribute('data-value');
//     console.log(value);
//     mylist.splice(value, 1);
//     updateList();
//     Afficher();
//     userEl.focus();
// }

// function updateList() {
//     cont.innerHTML =`Element(s) ajouté(s) :${mylist.length}`;
// }
// function Afficher(){
//     liste.innerHTML ='';
//     mylist.forEach((element)=>{
//         liste.innerHTML += `
//         <li>${element} <button type="submit" class="supprimer" data-value=${mylist.indexOf(element)}><i class="fa-solid fa-trash"></i></button></li>`;
//     });
    
//     let btnsupprimer= document.querySelectorAll('.supprimer');
//     btnsupprimer.forEach((button)=>{
//        button.addEventListener('click',(event)=>{
//            remove(event);
//        });
//    });

// }

let myCourseList = [];

// console.log(myCourseList);

//Selection des elements
const description= document.querySelector('.description');
const amount= document.querySelector('.amount');
const category= document.querySelector('.category');
const ajouter= document.querySelector('.add-button');
const container=document.querySelector('.container');
const afficher = document.querySelector('.afficher');
const totalCourse=document.querySelector('.totalCourse');
let total=0;


ajouter.addEventListener('click',(event)=>{
    event.preventDefault();
    let descriptionValue = description.value;
    let amountValue = amount.value;
    let categoryValue = category.value;

    // if(!descriptionValue || !amountValue || !categoryValue){
    //     alert('Veuillez remplir tous les champs');
    //     return;
    // }

    // if(myCourseList.some(item => item[0].toUpperCase() === descriptionValue.toUpperCase())){
    //     alert('Cette course existe déjà');
    //     return;
    // }

    // myCourseList.push([descriptionValue, amountValue, categoryValue]);
    addCourse(descriptionValue, amountValue, categoryValue);
    console.log(myCourseList);
    description.value = '';
    amount.value = '';
    category.value = '';
    console.log(myCourseList);
    displayCourse();
});


const addCourse=(descrition,montant,categorie)=>{
    myCourseList.push([descrition,montant,categorie]);
}

const displayCourse=()=>{

    if(afficher.hasChildNodes()){
        afficher.innerHTML='';
    }
    const ul=document.createElement('ul');
    total=0;
    myCourseList.forEach((element)=>{  
        const li=document.createElement('li');
        li.innerHTML=`<span>${element[0]}</span><span>-</span><span>${element[1]}</span><span>-</span><span> ${element[2]}</span><a href="#" class="delete" date-value=${myCourseList.indexOf(element)}>🗑️</a>`;
        total+= parseInt(element[1]);
        ul.appendChild(li);
    });
    afficher.appendChild(ul);
    totalCourse.innerHTML=`Total : ${total} €`;
    // container.appendChild(divAfficher);
}