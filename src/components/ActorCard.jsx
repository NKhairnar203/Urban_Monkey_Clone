import React from 'react'
import "./ActorCard.css"
import BuyersCard from './allCards/BuyersCard';
const ActorCard = () => {
  return (
    <>
      <div className="actor-card">
        <div className="upper-act">
          <h5>WORN BY YOUR FAVOURITE CELEBRITIES</h5>
          <h2>REDEFINING STREET STYLE WITH URBAN MONKEY!</h2>
          <p>
            Tag us <b>@urbanmonkeyindia</b> for a chance to be featured
          </p>
        </div>
        <div className="actor-cards">
          <BuyersCard />
        </div>
      </div>
    </>
  );
}

export default ActorCard
