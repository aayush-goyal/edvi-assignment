/**
 * This interface is a use case which defines user scenarios related to getting all the products.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2022-02-03
 * @modifier
 * @modified
 * @since 1.0.0
 */
export default interface GetProducts {
	/**
	 * This function is used to get all the products from the fake API.
	 *
	 * @returns Promise with response or error.
	 */
	getAllProducts: () => Promise<object>;
}
