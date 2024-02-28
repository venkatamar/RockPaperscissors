let userscore=0;
let compuscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user");
const comp=document.querySelector("#compu");
const gencompuchoice=()=>{
    const options=["rock","paper","scissors"];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
};
const draw=()=>{
    msg.style.backgroundColor="darkviolet";
    msg.innerText="The game ended in a tie.Play again";
}
const showWinner=(userwin,userchoice,compuchoice)=>{
    if(userwin){
        userscore++;
        user.innerText=userscore;
        msg.innerText=`You emerged victorious as ${userchoice} triumphs over ${compuchoice} in your selection`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compuscore++;
        comp.innerText=compuscore;
        msg.innerText=`You've been defeated; ${userchoice} prevails over ${compuchoice} in this scenario`;
        msg.style.backgroundColor="red"
    }
};
const playgame=(userchoice)=>{
    const compuchoice=gencompuchoice();
    if(userchoice===compuchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compuchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper"){
            userwin=compuchoice==="scissors" ? false:true;
        }
        else{
            userwin=compuchoice==="rock" ? false:true;
        }
        showWinner(userwin,userchoice,compuchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});