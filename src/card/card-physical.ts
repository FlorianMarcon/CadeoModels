
/**
 * This interface represent the Gift model
 */
export interface ICardPhysical {
	_id				:	number /** Gift id */

	message	:	string /** Email of the destinary */

	address			:	string | null;

	deliveryDate		:	Date | null /** Delivery date */

	creationDate		:	Date /** Creation date */

	/** FIELD RESOLVERS */
	// card			:	ICard
}

/**
 * Interface use to create a new physical card
 */
 export interface ICardPhysicalCreate {
	message	:	string /** email of the destinary */

	address?			:	string

	deliveryDate?		:	Date /** Delivery date */

	idCard			:	number;
}


/**
 * Interface use to create a new physical card
 */
 export interface ICardPhysicalUpdate {
	idCardPhysical		:	number /** Id of the card */

	message?	:	string /** email of the destinary */

	address?			:	string

	deliveryDate?		:	Date /** Delivery date */
}
