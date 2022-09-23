function GoodItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets,
    addToOrder,
  } = props;
  const price = props.price.finalPrice;

  return (
    <div className="card">
      <div className="card-top">
        <div className="card-image carousel carousel-slider">
          {displayAssets.map((img, index) => (
            <div key={index} className="carousel-item">
              <img src={img.full_background} alt="text" />
            </div>
          ))}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {displayName}
          </span>
          <p>{displayDescription}</p>
        </div>
      </div>
      <div className="card-action center-align">
        <div className="card-price">
          <div className="new">{price} руб.</div>
        </div>
        <button
          className="waves-effect waves-light btn brown darken-1"
          onClick={() => addToOrder({ mainId, displayName, price })}
        >
          Добавить в корзину{" "}
          <i className="Medium material-icons right">add_circle</i>
        </button>
      </div>
    </div>
  );
}

export { GoodItem };
