import { IStore } from "../seller/Store";
import { ICard } from "./card";

export enum CardPurchaseStatus {
	WAITING = "WAITING",
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

	replyDate		:	Date | null /** Reply date */
	expirationDate	:	Date | null /** Expiration date */
	creationDate	:	Date /** Creation date */

	/** FIELD RESOLVERS */
	// idCard			:	number; /** Id of the card used */
	card			:	ICard;

	// idStore			:	number; /** Place where card have been used */
	store			:	IStore;
}

/**
 * Interface used to create a purchase
 */
export interface ICardPurchaseCreate {
	idCard			:	number /** Id of the card to use */

	idStore			:	number /** Place where card have been used */
	
	// idBrand			:	number /** Brand where card have been used */

	amount			:	number /** Amount to spend (in cts) */
}