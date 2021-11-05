import IBrand from "../seller/Brand";

/**
 * This interface represent the Card model
 */
export interface ICard {
	_id					:	string /** Id of the card */

	idProprietary		:	string /** Id of the proprietary */

	amount				:	number /** Total amount paid */
	amountRemainding	:	number /** Amount remainding */

	creationDate		:	Date /** Creation Date */

	/** FIELD RESOLVERS */
	allowedBrands		:	Array<IBrand> /** Allowed brands where use card */
}

/**
 * Interface use to create a new card
 */
export interface ICardCreate {
	amount				:	number /** Amount to put on the card (in cts) */

	idAllowedBrands		:	Array<number> /** Brand ids where card can be used */
}

/**
 * Interface used to supply an already existing card
 */
export interface ICardSupply {
	idCard				:	number /** Id of the card to supply */

	amount				:	number /** Amount to add (in cts) */
}