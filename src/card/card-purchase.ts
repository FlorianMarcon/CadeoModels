import IBrand from "../seller/Brand";
import { ICard } from "./card";

export enum CardPurchaseStatus {
	SENDED = "SENDED",
	CANCELED = "CANCELED",
	REFUSED = "REFUSED",
	ACCEPTED = "ACCEPTED",
}

/**
 * Interface representing a purchase
 */
export interface ICardPurchase {
	_id				:	number /** Id of the purchase */
	reference		:	string /** Unique UUID */

	status			:	CardPurchaseStatus /** Status of the purchase */
	amount			:	number /** Amount of the purchase (in cts) */

	replyDate		:	Date /** Reply date */
	expirationDate	:	Date /** Expiration date */
	creationDate	:	Date /** Creation date */

	/** FIELD RESOLVERS */
	idCard			:	number; /** Id of the card used */
	card			:	ICard;

	idBrand			:	number; /** Place where card have been used */
	brand			:	IBrand;
}

/**
 * Interface used to create a purchase
 */
export interface ICardPurchaseCreate {
	idCard			:	number /** Id of the card to use */

	amount			:	number /** Amount to spend (in cts) */
}