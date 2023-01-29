import React, { useEffect, useState } from "react";
import "./card.css";

function Card() {
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/uzbekistan`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCard(data);
      });
  }, []);
  const [card, setCard] = useState([]);
  // const [card1, setCard1] = useState([]);

  return (
    
      <div  className="card-wrapper">
        {card.map((item) => {
           return(
            <div key={item.area}>
                <h1>{item.name.common}</h1>

                <img src={item.flags.svg} alt="icom "  width={100} height={80}/>
                <img src={item.coatOfArms.svg} alt="icom "  width={100} height={80}/>
                
                <p>{item.area}</p>

            </div>
           )

        })}
        
      </div>
    
  );
}

export default Card;
