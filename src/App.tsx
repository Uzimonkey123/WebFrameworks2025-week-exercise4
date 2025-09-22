import React from "react";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";
import { createBrowserRouter, Link, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";

const Layout = () => {
	return (
		<div>
			<nav>
				<Link to="/">Products</Link>
				<Link to="/cart">Cart</Link>
			</nav>
			<Outlet />
		</div>
	);
};

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
			{
				path: "/",
				element: <ProductsView />,
			},
			{
				path: "/product/:id",
				element: <ProductDetailsView />,
			},
			{
				path: "/cart",
				element: <CartView />,
			},
		],
		},
	]);

	return (
		<RouterProvider router={router} />
	);
};

export default App;
