function OperationsList() {
  return (
    <>
      <div className="operations__content operations__content--1 operations__content--active">
        <div className="operations__icon operations__icon--1">
          <svg>
            <use href="img/icons.svg#icon-upload"></use>
          </svg>
        </div>
        <h5 className="operations__header">
            {/* {title} */}
          Tranfser money to anyone, instantly! No fees, no BS.
        </h5>
        <p>
            {/* {description} */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </>
  );
}

export default OperationsList;