import { BasketPopupElement } from "./BasketPopupElement";

function BasketPopup(props) {
  const { basketShow, openBasket, orders, removeFromOrder, ordersIncrement, ordersDecrement } = props;
  const totalPrice = orders.reduce((sum, el) => {
    return sum + (el.price * el.quantity);
  }, 0);

  return (
    <div className={"basket-content" + (basketShow ? " show" : "")}>
      <div className="basket-overlay" onClick={() => openBasket()}></div>

      <div className="basket-popup">
        <div className="basket-close" onClick={() => openBasket()}>
          <i className="material-icons">cancel</i>
        </div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Корзина:</h4>
          </li>

          {orders.map((el) => (
            <BasketPopupElement key={el.mainId} {...el} removeFromOrder={removeFromOrder} ordersIncrement={ordersIncrement} ordersDecrement={ordersDecrement} />
          ))}

          <li className="collection-item active">
            <div>
              Общая стоимость:{" "}
              <b className="secondary-content">{totalPrice} руб.</b>
            </div>
          </li>
        </ul>
        <button className="btn order brown darken-1 white-text">Оформить заказ <i className="material-icons right">trending_flat</i></button>
      </div>
    </div>
  );
}

export { BasketPopup };
