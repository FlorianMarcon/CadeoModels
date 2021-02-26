import { IUser } from "../User";

/**
 * Interface representing a stripe payment
 */
export interface IStripePayment {
	_id				:	number /** Id of the purchase */

	status			:	string /** Status of the purchase */

	amount			:	number /** Amount of the purchase (in cts) */

	creationDate	:	Date /** Creation date */

	/** FIELD RESOLVERS */
	// idUser			:	number; /** Id of the user spending */
	user			:	IUser;
}
