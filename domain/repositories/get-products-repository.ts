import axios from 'axios';

/**
 * This class serves as repository for performing any operation related to getting all products.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2022-02-03
 * @modifier
 * @modified
 * @since 1.0.0
 */
export default class GetProductsRepository {
	/**
	 * This function calls the API end-point @ https://fakestoreapi.com/products to send an e-mail.
	 *
	 * @returns Response from the API call.
	 */
	// eslint-disable-next-line class-methods-use-this
	async getAllProducts() {
		try {
			const response = await axios.get(
				'https://fakestoreapi.com/products'
			);
			return response;
		} catch (error) {
			return { message: error };
		}
	}
}
