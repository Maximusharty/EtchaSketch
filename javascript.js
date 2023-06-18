function colorChoice(){
    
let r=Math.floor((Math.random()*255)+1);
let g=Math.floor((Math.random()*255)+1);
let b=g=Math.floor((Math.random()*255)+1);
return 'rgb('+r+','+g+','+b+')';


}


const body=document.querySelector('body');
const container=document.createElement('div');
const outcontainer=document.createElement('div');
container.classList.add('container');
body.appendChild(outcontainer);
outcontainer.classList.add('outcontainer');
outcontainer.appendChild(container);
const buttons=document.querySelector('.click');
buttons.addEventListener('click',game);

function game(e){
container.innerHTML="";




const input=document.querySelector('input');
newValue=input.valueAsNumber;

count=0;







for(i=0;i<newValue;i++)
{   
    const dimension= (480/newValue);

    const row=document.createElement('div');
    container.appendChild(row);
    row.classList.add('row');
    row.style.display='flex';
    row.style.width=dimension+'px';
    row.style.height=dimension+'px';
    
    
    
    

    
    

   



    for(j=0;j<newValue-1;j++){
        
    const column=document.createElement('div');
    container.appendChild(column);
    column.classList.add('column');
    column.style.display='flex';
    column.style.width=dimension+'px';
    column.style.height=dimension+'px';
    








   
    


   
  

}
}

window.addEventListener('click',()=>{
    count++;
    console.log(count);
    
    if(count%2!==0){
        rows=document.querySelectorAll('.row');
        columns=document.querySelectorAll('.column');
        
        rows.forEach((row)=>{

    
    row.addEventListener('mouseover',()=>{
        row.style.backgroundColor=colorChoice();
    })})
    columns.forEach((column)=>{
        column.addEventListener('mouseover',()=>{
            column.style.backgroundColor=colorChoice();
        })
    }

    )
}
    else{
        rows=document.querySelectorAll('.row');
        columns=document.querySelectorAll('.column');
        
        rows.forEach((row)=>{

    
    row.addEventListener('mouseover',()=>{
        row.style.backgroundColor=colorChoice();
    })})
    columns.forEach((column)=>{
        column.addEventListener('mouseover',()=>{
            column.style.backgroundColor=colorChoice();
        })
    }

    )
        
    }
})



}
const button=document.createElement('button');

button.textContent="Erase";
button.classList.add('erase');

body.appendChild(button);
button.addEventListener('click',()=>{
    const rows=document.querySelectorAll('.row');
    const columns=document.querySelectorAll('.column');
    rows.forEach((row)=>{
        row.style.backgroundColor="white";
    }

    )
    columns.forEach((column)=>{
        column.style.backgroundColor="white";
    }

    )
    
})








