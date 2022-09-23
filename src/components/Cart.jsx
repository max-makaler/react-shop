function Cart(props) {
    const { quantity = 0 } = props;
    const { openBasket = Function.prototype } = props;
  return (
    <div
      className={
        "shop-cart brown darken-1 white-text " + (quantity ? "show" : "")
      }
      onClick={() => openBasket()}
    >
      <i className="material-icons">local_grocery_store</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
