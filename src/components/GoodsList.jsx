import { GoodItem } from "./GoodItem";

function GoodsList(props) {
  const { goods = [], addToOrder } = props;
  return (
    <div className="cards_container container">

      {goods.length ? (
        goods.map((good) => <GoodItem key={good.mainId} {...good} addToOrder={addToOrder} />)
      ) : (
        <h4>Ничего не найдено =(</h4>
      )}

    </div>
  );
}

export { GoodsList };
