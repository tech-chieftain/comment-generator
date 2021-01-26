let headOfHouse = document.querySelector('#headofhouse');
let age = document.querySelector('#age');

let married = document.querySelector('#married');

let dependents = document.querySelector('#dependents');

let employment = document.querySelector('#employment');

let education = document.querySelector('#education');

let english = document.querySelector('#english');

let computer = document.querySelector('#computer');

let recoded1 = document.querySelector('#recoded-answers1');
let recoded2 = document.querySelector('#recoded-answers2');
let recoded3 = document.querySelector('#recoded-answers3');

let triedcoding = document.querySelector('#tried-coding');

let motivation = document.querySelector('#motivation');
let essay = document.querySelector('#essay');
let submit = document.querySelector('#submit');
let text = document.querySelector('#text');


submit.addEventListener('click',function (e) {
e.preventDefault();
    var x = {};
    x.age = age.value; //
    x.headOfHouse = headOfHouse.checked;
    x.married = married.checked;
    x.dependents = dependents.value;
    x.employment = employment.value;
    x.education = education.value;
    x.computer = computer.value;
    x.english = english.value;
    x.recoded1 = recoded1.checked;
    x.recoded2 = recoded2.checked;
    x.recoded3 = recoded3.checked;
    x.triedcoding = triedcoding.checked;
    x.motivation = motivation.value;
    x.essay = essay.value;

    console.table(x);


    let decision = "";

    decision+=`- ${x.age}, ${x.education}`
    decision+= "\n"
    decision += "- "
    if(x.headOfHouse)
        decision+='Head of House, ';

        if(x.married)
        decision+='Married, ';

        decision+=`${x.employment}, with ${x.dependents}  dependents`
        decision+= "\n"


    decision+=`- ${x.english} in English, ${x.computer} in Computer Skills`

    decision+= "\n"


    if(!x.recoded1){
        decision+=`- Incorrect answer to what is Re:Coded's mission`
        
        decision+= "\n"
        
    }

    if(!x.recoded2){
        decision+=`- Incorrect answer to where Re:Coded is operating`
    
        decision+= "\n"

    }
    
    if(!x.recoded3){
        decision+=`- Incorrect answer to what Re:Coded is teaching`
        
        decision+= "\n"

    }


    if(x.triedcoding)
    decision+=`- Has coding experience`
    else
    decision+=`- Has no coding experience`

    decision+= "\n"

    decision+= `- ${x.motivation}`
    decision+= "\n"

    decision+= `- ${x.essay}`
    

    console.log(decision);
    
    text.value = decision;
    text.focus();

})


