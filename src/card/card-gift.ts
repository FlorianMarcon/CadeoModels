import { IUser } from "../User";
import { ICard } from "./card";

export enum CardGiftStatus {
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

	emailDestinary	:	string /** Email of the destinary */

	status			:	CardGiftStatus /** Gift status */

	creationDate		:	Date /** Creation date */

	/** FIELD RESOLVERS */
	card			:	ICard

	givor			:	IUser;
}

/**
 * Interface use to create a new gift
 */
export interface ICardGiftCreate {
	idCard			:	number /** Id of the card to send */

	emailDestinary	:	string /** email of the destinary */
}
