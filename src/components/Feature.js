import digitalLazy from '../assets/img/digital.jpg';
import growLay from '../assets/img/grow.jpg';
import cardLazy from '../assets/img/card.jpg';

import Features from "./Features/Features";
function Feature() {
  return (
    <section className="section" id="section--1">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">
          Everything you need in a modern bank and more.
        </h3>
      </div>
        <div className='features'>
            <Features imgSrc={digitalLazy} title="100% digital bank"></Features>
            <Features imgSrc={growLay} title="Watch your money grow"></Features>
            <Features imgSrc={cardLazy} title="Free debit card included"></Features>
        </div>
      
    </section>
  );
}

export default Feature;
