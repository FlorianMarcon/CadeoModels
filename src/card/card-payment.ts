import { IStripePayment } from "../payments/stripe-payment";
import { IUser } from "../User";
import { ICard } from "./card";

/**
 * Interface representing a Payment
 */
export interface ICardPayment {
	_id				:	number /** Id of the Payment */

	/** FIELD RESOLVERS */
	idStripePayment	:	number; /** Id of the stripe payment */
	stripePayment	:	IStripePayment;

	idCard			:	number /** Id of the card suplied */
	card			:	ICard;

	idUser			:	number /** User spending */
	user			:	IUser;
}
