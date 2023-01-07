import "./index.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";




const Game = () => {

const CARDSNUMBER = 12;   let cardsList=[];   let cardPairs=[]; let totalMoves = 6;
let firstCard;            let secondCard;     let holdPair=[];  
    const setDisplayCards = () =>{
        for(let i = 0; i < CARDSNUMBER; i++){cardsList[i] = i + 1;}
    }

    const setPairs=() => {
            let maxRandomNumber = 2;
        for(let i = 0; i < CARDSNUMBER;i+=2){
            cardPairs[i] = Math.floor(Math.random() * (maxRandomNumber - (maxRandomNumber-1) + 1)) + (maxRandomNumber-1);
            holdPair.push(cardPairs[i])

            cardPairs[i + 1] = Math.floor(Math.random() * (maxRandomNumber - (maxRandomNumber-1) + 1)) + (maxRandomNumber-1);
            while(holdPair.includes(cardPairs[i + 1])){
                cardPairs[i + 1] = Math.floor(Math.random() * (maxRandomNumber - (maxRandomNumber-1) + 1)) + (maxRandomNumber-1);
            }
            holdPair.push(cardPairs[i + 1])
            cardPairs[i + 1] = holdPair[i + 1]
            maxRandomNumber += 2;
                                             }
                        }


    const getFirstSecondCard=(cardProps)=>{
        if(firstCard == null){
            firstCard = Number(cardProps.target.title);
            return false;
        }

        if(secondCard == null){
            secondCard = cardProps.target.title;
        }

        if(secondCard == firstCard + 6 || secondCard == firstCard - 6 ){
            firstCard = null;
            secondCard = null
            totalMoves--;
            return true;

        }else{
            firstCard = null;
            secondCard = null
            return false;
        }
    }

 

const setCardsFront = (cardProps) =>{
    let cardId = document.getElementById(cardProps.target.id);
    if(cardProps.target.title == 1 || cardProps.target.title == 7){
        cardId.style.backgroundImage = "url(https://i.ibb.co/SPnsP2V/berry1.png)";
        cardId.style.backgroundSize = "68px 95px";
    }else if (cardProps.target.title == 2 || cardProps.target.title == 8){
        cardId.style.backgroundImage = "url(https://i.ibb.co/KmHbwjK/banana1.png)";
        cardId.style.backgroundSize = "65px 90px";
    }else if (cardProps.target.title == 3 || cardProps.target.title == 9){
        cardId.style.backgroundImage = "url(https://i.ibb.co/R64KRFx/kiwi1.png)";
        cardId.style.backgroundSize = "70px 95px";
    }else if (cardProps.target.title == 4 || cardProps.target.title == 10){
        cardId.style.backgroundImage = "url(https://i.ibb.co/hHjt0yM/peach1.png)";
        cardId.style.backgroundSize = "72px 85px";
    }
    else if (cardProps.target.title == 5 || cardProps.target.title == 11){
        cardId.style.backgroundImage = "url(https://i.ibb.co/hWbMx6Z/cherry.png)"; //
        cardId.style.backgroundSize = "75px 100pxpx";
    }
    else if (cardProps.target.title == 6 || cardProps.target.title == 12){
        cardId.style.backgroundImage = "url(https://i.ibb.co/tmd7gt4/orange1.png)"; //
        cardId.style.backgroundSize = "72px 95px";
    }
}

    let one = null;
    const setCardsBack = (cardProps)=>{
        setCardsFront(cardProps);
        const showCard = setInterval(() => {
            let state = getFirstSecondCard(cardProps);
            console.log(state);
            if(state == false){
                one = cardProps;
            }
            if(state == true){
                setCardsFront(one);
                clearInterval(showCard);
                one = null;
                if(totalMoves <= 0){alert("Game Over"); window.location.href = '/MemoryGame'; }
                return;
            }
            document.getElementById(cardProps.target.id).style.backgroundImage = "url(https://i.ibb.co/ThWyGwQ/cardred.png)";
            document.getElementById(cardProps.target.id).style.backgroundSize = "75px 117px";
            clearInterval(showCard);

        }, 500);        
    }

    setDisplayCards();
    setPairs();



    return ( 
        <div>
            <div className="options">
            <Link to="/MemoryGame"><div className="backbutton">Back</div></Link>
            </div>
            <div className="floor" id="floor">
            <div className="cardboard" id="cardboard">
                {cardsList && cardsList.map((e)=>(
                    <div key={e}>
                    <Link><div  className="card" id={e} title={cardPairs[e - 1]} onClick={setCardsBack}  ></div></Link>  
                    </div>
                ))
                }

            </div>
        </div>
        </div>

     );
}
 
export default Game;