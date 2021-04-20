import { IUser } from "../User";

export enum StripePaymentStatus {
	DONE = "DONE"
}

/**
 * Interface representing a stripe payment
 */
export interface IStripePayment {
	_id				:	number /** Id of the purchase */

	status			:	StripePaymentStatus /** Status of the purchase */

	amount			:	number /** Amount of the purchase (in cts) */

	idPaymentIntent	:	string /** Id of the payment intent gave by stripe */

	idStripeCustomer:	string /** Customer id. This id doesn't come from our database but from stripe db */

	creationDate	:	Date /** Creation date */

	/** FIELD RESOLVERS */
	idUser			:	string; /** Id of the user spending */
	user			:	IUser;
}


/**
 */
export interface IStripePaymentCreate extends Partial<IStripePayment> {
	status			:	StripePaymentStatus

	amount			:	number /** Amount of the purchase (in cts) */

	idUser			:	string; /** Id of the user spending */

	idPaymentIntent	:	string /** Id of the payment intent gave by stripe */

	idStripeCustomer:	string /** Customer id. This id doesn't come from our database but from stripe db */
}