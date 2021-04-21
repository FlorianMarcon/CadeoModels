import UserSchema from "../../../database/schema/user.schema";
import { IStripePayment } from "../payment/stripe-payment";
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

	idUser			:	string; /** Id of the user suplying the card */
	user			:	UserSchema
}

export interface ICardPaymentCreate extends Partial<ICardPayment> {
	idStripePayment	:	number; /** Id of the stripe payment */
	
	idCard			:	number /** Id of the card suplied */

	idUser			:	string /** Id of the user suplying the card */
}