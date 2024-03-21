let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");

let turn0 = true;
 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
resetButton.addEventListener("click", ()=>{
   boxes.forEach((box) => {
    box.innerText="";
    box.disabled=false;
    turn0=true;
   })
});
 boxes.forEach((box) =>
    {
        box.addEventListener("click",()=>
        {
            if(turn0){
                box.innerHTML="O";
                turn0=false;
            }
            else{
                box.innerHTML="X";
                turn0=true;
            }
            box.disabled=true;
            winnerPattern();
        });
    });
   
    const winnerPattern = () => {
    for( let pattern of winPatterns){
        let  pos1val =boxes[pattern[0]].innerHTML;
        if(boxes[pattern[0]].innerHTML!="" && boxes[pattern[1]].innerHTML!="" && boxes[pattern[2]].innerHTML!="")
        {
            if(boxes[pattern[0]].innerHTML===boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML===boxes[pattern[2]].innerHTML)
            {
                showWinner(pos1val);
            }
        }
    }
    }  
    let body = document.querySelector("body");
    const showWinner = (pos1val) =>
    {
        body.innerHTML=`Congratulations winner of the game is ${pos1val}`;
        body.style.fontSize="56px";
        body.style.marginTop="100px";
        let div =document.createElement("div");
        div.classList.add("hide");
        body.append(div);
        let btn = document.createElement("btn");
        btn.innerText="New Game";
        div.after(btn);
        btn.classList.add("new");
        btn.addEventListener("click",()=>{
            location.reload();
        });
    }
