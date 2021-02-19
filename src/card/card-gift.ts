
enum CardGiftStatus {
	SENDED = "SENDED",
	CANCELED = "CANCELED",
	REFUSED = "REFUSED",
	ACCEPTED = "ACCEPTED",
}
/**
 * This interface represent the Gift model
 */
export interface ICardGift {
	_id				:	number /** Gift id */

	idCard			:	number /** Id of the card to gift */
	idGivor			:	number /** Id of the user given the card */
	emailDestinary	:	string /** Email of the destinary */

	status			:	CardGiftStatus /** Gift status */

	creationDate		:	Date /** Creation date */
}

/**
 * Interface use to create a new gift
 */
export interface ICardGiftCreate {
	idCard			:	number /** Id of the card to send */

	emailDestinary	:	number /** email of the destinary */
}
