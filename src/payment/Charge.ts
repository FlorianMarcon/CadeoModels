
/**
 * Interface representing brand informations
 */
export interface ICharge  {

	_id     :    number; /** Id of the charge */

	idBrand :	number; /** Id of the brand having the charge */

	fixedFee?           :   number; /** Fixed fee (in cts) */

	percentageFee?    :   number; /** Percentage fee (in cts) */
}

/**
 * Interface used to create a brand
 */
export interface IChargeCreate {
	
	idBrand :	number; /** Id of the brand having the charge */

	fixedFee?           :   number; /** Fixed fee (in cts) */
	
	percentageFee?    :   number; /** Percentage fee (in cts) */
}

/**
 * Interface used to update a brand
 */
export interface IChargeUpdate {

	_id             :   number; /** Id of the brand to update */

	fixedFee?           :   number | null; /** Fixed fee (in cts) */

	percentageFee?    :   number | null; /** Percentage fee (in cts) */
}