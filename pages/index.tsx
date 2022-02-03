import { Rating } from '@mui/material';

import { useEffect, useState } from 'react';
import Button from '../components/button';

import GetProductsImpl from '../domain/usecases/get-products-impl';
import GetProductsRepository from '../domain/repositories/get-products-repository';

import Colors from '../core/constants/colors';
import Dimens from '../core/constants/dimens';

/**
 * Description
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2022-02-03
 * @modifier
 * @modified
 * @since 1.0.0
 */
function Index() {
	const [products, setProducts] = useState([]);
	const [areProductsLoaded, setAreProductsLoaded] = useState(false);
	const [sortType, setSortType] = useState(-1);

	// Success callback.
	const successCallback = (response) => {
		setProducts(response.data);
		setAreProductsLoaded(true);
	};

	// Error callback.
	const rejectCallback = (error) => {
		alert(error);
	};

	/**
	 * This functions call the fake API and returns either a list of products or an error object.
	 */
	const getAllProducts = () => {
		const getProductsRepository = new GetProductsRepository();
		const getProductsUseCase = new GetProductsImpl(getProductsRepository);

		const productPromise = getProductsUseCase.getAllProducts();
		productPromise.then(successCallback, rejectCallback);
	};

	/**
	 * This method is used to initialize fake API call on page load.
	 */
	useEffect(() => {
		getAllProducts();
	}, []);

	/**
	 * This function sorts the products list based on the price sort type.
	 */
	const sortProducts = (type: number) => {
		const productsList = products;
		const sortFunctionLowToHigh = (price1, price2) =>
			price1.price - price2.price;
		const sortFunctionHighToLow = (price1, price2) =>
			price2.price - price1.price;
		let sortFunction;
		if (type === 0) {
			sortFunction = sortFunctionLowToHigh;
		} else {
			sortFunction = sortFunctionHighToLow;
		}
		const finalProductsList = [...productsList].sort(sortFunction);

		setProducts(finalProductsList);
	};

	useEffect(() => {
		sortProducts(sortType);
	}, [sortType]);

	return (
		<main>
			<div className="grid-main">
				{/* Sort UI */}
				<p className="text text-body text-sort">Sort Products</p>
				<div className="div-sort">
					{/* price - low to high Button */}
					<Button
						buttonOnClick={() => setSortType(0)}
						buttonText="price - low to high"
						id="button-sort-price-lth"
						width="200px"
					/>
					{/* price - high to low Button */}
					<Button
						buttonOnClick={() => setSortType(1)}
						buttonText="price - high to low"
						id="button-sort-price-lth"
						width="200px"
					/>
				</div>
				<div className="div-cards">
					{/* Card UI */}
					{areProductsLoaded ? (
						products.map((product) => (
							<div className="div-card" key={product.id}>
								<img
									className="product-image"
									src={product.image}
									alt="Product"
								/>
								<p className="text text-button text-product-title">
									{product.title}
								</p>
								<p className="text text-product-desc">
									{product.description}
								</p>
								<p className="text text-heading-6 text-product-price">
									${product.price}
								</p>
								<Rating
									className="rating-product"
									name="half-rating"
									disabled
									defaultValue={product.rating.rate}
									precision={0.1}
								/>
							</div>
						))
					) : (
						<p className="text text-heading-5">
							Products are loading...
						</p>
					)}
				</div>
			</div>
			<style jsx>
				{`
					main {
					}
					.grid-main {
						display: grid;
					}
					.text-sort {
						text-align: center;
					}
					.div-sort {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
					}
					.div-cards {
						display: grid;
						grid-template-columns: repeat(
							auto-fit,
							minmax(320px, 5fr)
						);
						row-gap: ${Dimens.FONT_SIZE_HEADING_6};
						margin-top: 48px;
					}
					.div-card {
						width: ${Dimens.SCREEN_WIDTH_PHONE_MIN};
						height: ${Dimens.SCREEN_WIDTH_PHONE_L};
						margin-top: 16px;
						justify-self: center;
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						grid-template-rows: 240px 60px 140px 40px;
						background-color: ${Colors.WHITE};
						border-radius: ${Dimens.BORDER_RADIUS};
						box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
					}
					.product-image {
						width: inherit;
						height: ${Dimens.SCREEN_WIDTH_MIN};
						grid-column: 1/3;
						grid-row: 1/2;
						object-fit: contain;
					}
					.text {
						margin: 0;
						font-family: 'Titillium Web', sans-serif;
					}
					.text-product-title {
						grid-column: 1/3;
						grid-row: 2/3;
						align-self: center;
						padding: 0 ${Dimens.BORDER_RADIUS};
					}
					.text-product-desc {
						grid-column: 1/3;
						grid-row: 3/4;
						padding: 0 ${Dimens.BORDER_RADIUS};
						overflow: hidden;
					}
					.text-product-price {
						grid-column: 1/2;
						grid-row: 4/5;
						padding: 0 ${Dimens.BORDER_RADIUS};
					}
					 {
						/* .text-heading-1 {
						font-size: 61.25px;
					}
					.text-heading-2 {
						font-size: 48.8px;
					}
					.text-heading-3 {
						font-size: 39.04px;
					}
					.text-heading-4 {
						font-size: 31.25px;
					} */
					}
					.text-heading-5 {
						font-size: 25px;
					}
					.text-heading-6 {
						font-size: 20px;
					}
					.text-body {
						font-size: 16px;
						line-height: 24px;
					}
					.text-button {
						font-size: 16px;
						font-weight: 700;
						line-height: 24px;
					}
					.text-overline {
						margin: 0;
						font-family: 'Ubuntu', sans-serif;
						font-size: 12.8px;
						text-transform: lowercase;
					}
					.text-caption {
						margin: 0;
						font-size: 12.8px;
					}
					.text-subtitle-1 {
						margin: 0;
						font-size: 16px;
					}
					.text-subtitle-2 {
						margin: 0;
						font-size: 12.8px;
					}
					body {
						margin: 0;
					}
					a {
						text-decoration: none;
					}
					@media screen and (min-width: 768px) {
						main {
							padding: 60px;
						}
					}
					@media screen and (min-width: 1536px) {
						main {
							padding: 60px 80px;
						}
					}
				`}
			</style>
			<style jsx global>
				{`
					html {
						background-color: ${Colors.GRAY_E1};
					}
					.rating-product {
						grid-column: 2/3;
						grid-row: 4/5;
						padding: 0 ${Dimens.BORDER_RADIUS};
						justify-self: end;
						align-self: center;
					}
				`}
			</style>
		</main>
	);
}

export default Index;
