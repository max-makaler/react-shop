import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader.jsx";
import { Cart } from "./Cart";
import { BasketPopup } from "./BasketPopup";
import { GoodsList } from "./GoodsList";
import { BasketAlert } from "./BasketAlert";

import M from "materialize-css";

function Main() {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [orders, setOrders] = useState([]);
  const [basketShow, setBasketShow] = useState(false);
  const [basketAlert, setbasketAlert] = useState("");

	const openBasket = () => {
		setBasketShow(!basketShow);
	};

	const addToOrder = (item) => {
		const itemIndex = orders.findIndex((el) => el.mainId === item.mainId);
		if (itemIndex === -1) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrders([...orders, newItem]);
		} else {
			const newOrders = orders.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});
			setOrders(newOrders);
		}
    setbasketAlert(String(item.displayName));
	};

	const removeFromOrder = (item) => {
		const newOrders = orders.filter((el) => el.mainId !== item.mainId);
		setOrders(newOrders);
	};

	const ordersIncrement = (id) => {
		const newOrders = orders.map((el) => {
			if (el.mainId === id) {
				return {
					...el,
					quantity: el.quantity + 1,
				};
			} else {
				return el;
			}
		});
		setOrders(newOrders);
	};

	const ordersDecrement = (id) => {
		const newOrders = orders.map((el) => {
			if (el.mainId === id) {
				return {
					...el,
					// проверяю, если количество больше одного, тогда уменьшаю на 1, иначе оставляю 1
					quantity: el.quantity > 1 ? el.quantity - 1 : 1,
				};
			} else {
				return el;
			}
		});
		setOrders(newOrders);
	};

	const closeBasketAlert = () => {
		setbasketAlert("");
	};

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => setGoods(data.shop));
		setLoading(false);
	}, []);

	useEffect(() => {
		let elems = document.querySelectorAll(".carousel");
		M.Carousel.init(elems, {
			fullWidth: true,
			indicators: true,
		});
	});

	return (
		<div className="main">
			<Cart quantity={orders.length} openBasket={openBasket} />
			{loading ? (
				<Preloader />
			) : (
				<GoodsList goods={goods} addToOrder={addToOrder} />
			)}
			<BasketPopup
				basketShow={basketShow}
				openBasket={openBasket}
				orders={orders}
				removeFromOrder={removeFromOrder}
				ordersIncrement={ordersIncrement}
				ordersDecrement={ordersDecrement}
			/>
			{basketAlert && (
				<BasketAlert
					productName={basketAlert}
					closeBasketAlert={closeBasketAlert}
				/>
			)}
		</div>
	);
}

export { Main };
