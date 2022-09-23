function BasketPopupElement(props) {
  const { mainId, displayName, price, quantity, removeFromOrder, ordersIncrement, ordersDecrement } = props;

  return (
    <li className="collection-item" data-id={mainId}>
      <div>
        <span className="prod-name">{displayName}</span>
        <span className="prod-colvo">
          <i className="material-icons quan-control" onClick={() => ordersDecrement(mainId)}>expand_more</i>
          {quantity}
          <i className="material-icons quan-control" onClick={() => ordersIncrement(mainId)}>expand_less</i>
        </span>
        <span className="all-price">= {quantity * price} руб.</span>
        <div onClick={() => removeFromOrder({...props})} className="secondary-content deleteBasket">
          <i className="material-icons">close</i>
        </div>
      </div>
    </li>
  );
}

export { BasketPopupElement };
