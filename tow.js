let boxes=document.querySelectorAll("#box");
let games=document.querySelector("#game");
let p=document.querySelector("#supermid #result #p");
let ng=document.querySelector("#supermid #result button");
let pl1=document.getElementById('pla1');
let pl2=document.getElementById('pla2');

let turn=true;
const arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [2,5,8],
    [2,4,6],
    [6,7,8]
    
];
ng.onclick=()=>{
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
        pl1.value="";
        pl2.value="";
    }
    xyz();
    

}
function blockbox(){
    for(let b of boxes){
        b.disabled=true;
    }
}
function xyz(){
if(turn){
    p.innerText="the 1st turn will gived by 'O' ";
}else{
    p.innerText="the 1st turn will gived by 'X' "; 
}
}
xyz();
if(pl1.value.length==="" && pl2.value.lenth===""){
    blockbox();
}else{
    boxes.forEach((box)=>{
        for(let b of boxes){
            b.disabled=false;
            b.innerText="";
            pl1.value="";
            pl2.value="";
    }
    box.addEventListener("click", ()=>
    {
        if(turn){
            p.innerText="its "+pl2.value+"'s turn";
            box.innerText="O";
            turn=false;
        }else{
            p.innerText="its "+pl1.value+"'s turn";
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
}


const  checkwinner = () => {
    for(let patterns of arr){
        if(boxes[patterns[0]].innerText!="" && boxes[patterns[1]].innerText!="" && boxes[patterns[2]].innerText!=""){
            if(boxes[patterns[0]].innerText === boxes[patterns[1]].innerText && boxes[patterns[1]].innerText === boxes[patterns[2]].innerText){
                boxes[patterns[0]].innerHTML="<p style='color:red;'>"+boxes[patterns[0]].innerHTML+"</p>";
                boxes[patterns[1]].innerHTML="<p style='color:red;'>"+boxes[patterns[1]].innerHTML+"</p>";
                boxes[patterns[2]].innerHTML="<p style='color:red;'>"+boxes[patterns[2]].innerHTML+"</p>";   
                if(boxes[patterns[0]].innerText==="O"){
                    p.innerText="winner is "+pl1.value;
                    blockbox();
                }else{
                    p.innerText="winner is "+pl2.value;
                    blockbox();
            }
        }
    }
}
}

