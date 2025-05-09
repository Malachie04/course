
let myCourseList = [];


//Selection des elements
const description= document.querySelector('.description');
const amount= document.querySelector('.amount');
const category= document.querySelector('.category');
const ajouter= document.querySelector('.add-button');
const container=document.querySelector('.container');
const afficher = document.querySelector('.afficher');
const totalCourse=document.querySelector('.totalCourse');

//Sous cathegories
const sousCatAlim=document.querySelector('.catAl-detl');
const sousCatTrans=document.querySelector('.cat-trans');
const sousCatDiv=document.querySelector('.cat-div');
const sousCatLog=document.querySelector('.cat-log');


let total=0,totalAli=0,totalLog=0,totalTrans=0,totaldiv=0,totalgen=0;
let messege='';
const alerte = document.querySelector('.alert');

ajouter.addEventListener('click',(event)=>{
    event.preventDefault();
    let descriptionValue = description.value;
    let amountValue = amount.value;
    let categoryValue = category.value;

    // if(!descriptionValue || !amountValue || !categoryValue){
    //     alert('Veuillez remplir tous les champs');
    //     return;
    // }
    
    if(amountValue<=0){
        messege='Le montant de la dépense doit être supérieur à 0';
        alerte.innerHTML=messege;
        setTimeout(() => {
            alerte.innerHTML='';
        }, 2000);
        return; 
    }

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
        totalAli=0;
        totalLog=0;
        totalTrans=0;
        totaldiv=0;
        totalgen=0;
    }
    const ul=document.createElement('ul');
    total=0;
    myCourseList.forEach((element)=>{  
        const li=document.createElement('li');
        li.attributes.setNamedItem(document.createAttribute('value'));
        li.setAttribute('value', myCourseList.indexOf(element));

        li.innerHTML=`<span>${element[0]}</span><span>-</span><span>${element[1]}</span><span>-</span><span> ${element[2]}</span><button href="#" class="delete">🗑️</button>`;

        switch (element[2]) {
            case 'logement':
                totalLog+=parseInt(element[1]);
                afficherbyCategory('logement',sousCatLog);
                break;

            case 'alimentation':
                totalAli+=parseInt(element[1]);
                afficherbyCategory('alimentation',sousCatAlim);
                break;
            case 'transport':
                totalTrans+=parseInt(element[1]);
                afficherbyCategory('transport',sousCatTrans);
                break;
            case 'divertissement':
                totaldiv+=parseInt(element[1]);
                afficherbyCategory('divertissement',sousCatDiv);
                break;
            default:
                break;
        }

        li.classList.add(`${element[2]}`);

        li.querySelector('.delete').addEventListener('click', (event) => {
            event.preventDefault();
            const index = event.target.parentElement.getAttribute('value');
            removeCourse(index); 
            
        });

        total+= parseInt(element[1]);
        ul.appendChild(li);
    });

    afficher.appendChild(ul);

    totalgen=totalAli+totalLog+totalTrans+totaldiv;
    totalCourse.innerHTML=`Total Général: ${totalgen} €`;
    // totalCourse.innerHTML=`Total Général: ${total} €`;

    affiherTotaux(totalAli,totalLog,totalTrans,totaldiv);


    
}


const removeCourse=(index)=>{
    myCourseList.splice(index, 1);
    displayCourse();
}

const affiherTotaux=(totalAli,totalLog,totalTrans,totaldiv)=>{
    document.querySelector('.total-al').innerHTML=`${totalAli} €`;
    document.querySelector('.total-trans').innerHTML=`${totalTrans} €`;
    document.querySelector('.total-div').innerHTML=`${totaldiv} €`;
    document.querySelector('.total-log').innerHTML=`${totalLog} €`;
}



const afficherbyCategory=(categorie,sousCat)=>{
    sousCat.innerHTML='';
    const ul=document.createElement('ul');
    let newList=myCourseList.filter((element)=>element[2]===categorie);

    newList.forEach((element)=>{
        const li=document.createElement('li');
        li.innerHTML=`${element[0]}`;
        ul.appendChild(li);
    });
    
    sousCat.appendChild(ul);
}   