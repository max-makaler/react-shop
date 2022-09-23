import { useEffect } from "react";

function BasketAlert(props) {
	const { productName = "", closeBasketAlert = Function.prototype } = props;

	useEffect(() => {
		const timerId = setTimeout(closeBasketAlert, 3000);

		return () => clearTimeout(timerId);

	// eslint-disable-next-line
	}, [productName]);

	return (
		<div className="basket-alert brown darken-1 white-text show">
			<b>{productName}</b> добавлен в корзину!
		</div>
	);
}

export { BasketAlert };
