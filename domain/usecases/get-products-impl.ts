// import Product from '../../data/model/product';
import GetProducts from '../usecases/get-products';
import GetProductsRepository from '../repositories/get-products-repository';

/**
 * This class is a use case which defines user scenarios related to getting all the products from the fake API.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2022-02-03
 * @modifier
 * @modified
 * @since 1.0.0
 */
export default class GetProductsImpl implements GetProducts {
	private getProductsRepository: GetProductsRepository;

	/**
	 * Primary constructor to constuct GetProductsImpl object with a GetProductsRepository.
	 *
	 * @param getProductsRepository GetProductsRepository dependency to be used.
	 */
	constructor(getProductsRepository: GetProductsRepository) {
		this.getProductsRepository = getProductsRepository;
	}

	/**
	 * This function is used to get all the products from the fake API.
	 *
	 * @returns Promise with response or error.
	 */
	getAllProducts = () =>
		new Promise<object>((resolve, reject) => {
			this.getProductsRepository
				.getAllProducts()
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
}
