import hero from '../assets/img/hero.png';

function Hero() {
  return (
    <div className="header__title">
      <h1>
        When
        <span className="highlight">banking</span>
        meets
        <br />
        <span className="highlight">minimalist</span>
      </h1>
      <h4>A simpler banking experience for a simpler life.</h4>
      <button className="btn--text btn--scroll-to">Learn more &#x2193;</button>
      <img src={hero} class="header__img" alt="Minimalist bank items" />
    </div>
  );
}

export default Hero;
