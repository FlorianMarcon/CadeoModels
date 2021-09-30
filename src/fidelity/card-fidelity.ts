import IBrand from "../seller/Brand";
import { IUser } from "../User";

/**
 * This interface represent the CardFidelity model
 */
export interface CardFidelity {
	_id					:	string;

	idProprietary		:	string;
	idBrand				:	number;

	points				:	number;

	creationDate		:	Date;
	lastUpdate			:	Date;

	/** FIELD RESOLVER */
	brand	:	IBrand;
	proprietary	:	IUser;
}
