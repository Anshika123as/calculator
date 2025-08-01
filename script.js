const display=document.getElementById('display');
const  buttons=document.querySelectorAll('button');
let currentinput="";
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const value=button.textContent;
        if(value==="C"){
            currentinput="";
        }
        else if(value==="="){
            try{
                currentinput=eval(currentinput).toString();
            }
            catch(e){
currentinput="error";
            }
        }
        else{
            currentinput+=value;
        }
        display.value=currentinput;
    });
});
