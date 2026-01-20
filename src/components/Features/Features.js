import { useState, useEffect } from "react";

function Features(props) {
    const [isLazy, setIsLazy] = useState(true);
    useEffect(()=>{
        setIsLazy(false);
    }, []);

    
  return (
    <>
      <img
        src={props.imgSrc}
        data-src="img/digital.jpg"
        alt="Computer"
        className={`features__img ${isLazy ? "lazy-img" : ""}`}
      />
      <div className="features__feature">
        <div className="features__icon">
          <svg>
            <use href="img/icons.svg#icon-monitor"></use>
          </svg>
        </div>
        <h5 className="features__header">{props.title}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
          debitis ducimus.
        </p>
      </div>
    </>
  );
}

export default Features;
