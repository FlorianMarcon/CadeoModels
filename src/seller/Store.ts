import { ILocation } from "../Location";
import IBrand from "./Brand";

/**
 * Interface representing store informations
 */
export interface IStore {

	_id     :    number; /** Id of the store */

	name    :   string; /** Name of the store */

	// calendar?    :   string; /** Url to calendar */

	/** FIELD RESOLVERS */
	brand   :   IBrand; /** Brand having the store */

	location?  :	ILocation; /** Store location. Can be null */
}

/**
 * Interface used to create a store
 */
export interface IStoreCreate {

	name            :   string; /** Name of the store */

	idBrand         :   number; /** Id of the brand having the store */
}

/**
 * Interface used to update a store
 */
export interface IStoreUpdate {

	_id             :   number; /** id of the store to update */

	name?            :   string; /** Name of the store */
}