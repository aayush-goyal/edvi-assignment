/**
 * This class is a POJO and contains fields related to a product.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2022-02-03
 * @modifier
 * @modified
 * @since 1.0.0
 */
export default class Product {
	id: number;

	title: string;

	price: number;

	description: string;

	category: string;

	image: string;

	rating: {
		rate: number;
		count: number;
	};

	/**
	 * Primary constructor to construct a ContactUsMessage object.
	 *
	 * @param id Id of the product.
	 * @param title The title of the product.
	 * @param price The price of the product.
	 * @param description The description of the product.
	 * @param category The category product belongs to.
	 * @param image The image of the product.
	 * @param rating Rating for the product containing rating and number of ratings.
	 */
	constructor(
		id: number,

		title: string,

		price: number,

		description: string,

		category: string,

		image: string,

		rating: {
			rate: number;
			count: number;
		}
	) {
		this.id = id;
		this.title = title;
		this.price = price;
		this.description = description;
		this.category = category;
		this.image = image;
		this.rating = rating;
	}
}
