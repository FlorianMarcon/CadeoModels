
/**
 * Interface representing brand informations
 */
export interface IStripeCustomer  {

	_id     :    number; /** Id of the StripeCustomer */

	idUser	:	string; /** Id of the user */

	idStripeCustomer	:	string; /** Stripe id customer */
}

/**
 * Interface used to create a brand
 */
export interface IStripeCustomerCreate {
	
	idUser	:	string; /** Id of the user */

	idStripeCustomer	:	string; /** Stripe id customer */
}
