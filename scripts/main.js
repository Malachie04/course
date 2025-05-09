
let myCourseList = [];


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

    document.querySelector('.delete').addEventListener('click', (event) => {
        removeCourse(event);
    });
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
        li.attributes.setNamedItem(document.createAttribute('value'));
        li.setAttribute('value', myCourseList.indexOf(element));

        li.innerHTML=`<span>${element[0]}</span><span>-</span><span>${element[1]}</span><span>-</span><span> ${element[2]}</span><button href="#" class="delete">🗑️</button>`;

        li.querySelector('.delete').addEventListener('click', (event) => {
            const index = myCourseList.indexOf(element);
            removeCourse(index); 
        });

        total+= parseInt(element[1]);
        ul.appendChild(li);
    });
    afficher.appendChild(ul);
    totalCourse.innerHTML=`Total : ${total} €`;
}
const removeCourse=(index)=>{
    myCourseList.splice(index, 1);
    displayCourse();
    displayCourse();
}