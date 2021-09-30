import { CardFidelity } from "../..";
import { IUser } from "../User";

export interface CardFidelitySupply {
	_id					:	number;

	idCardFidelity		:	string;

	updatePoints		:	number
	
	creationDate	:	Date;

	/** FIELD RESOLVERS */

	cardFidelity:	CardFidelity
	supplier	:	IUser
}


export interface CreateCardFidelitySupply {
	idCardFidelity		:	string;

	updatePoints		:	number
}

