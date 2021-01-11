export interface ILocation {
	_id			:		number; /** ID of location */

	latitude?	:		string; /** latitude of location */

	longitude?	:		string; /** longitude of location */

	country?	:		string; /** country of location */

	city?		:		string; /** city of location */

	postcode?	:		string; /** postcode of location */

	adress1?	:		string; /** first adress of location */

	adress2?	:		string; /** seoond adress of location */
}

export interface ILocationCreate {
	latitude?	:		string; /** latitude of location */

	longitude?	:		string; /** longitude of location */

	country?	:		string; /** country of location */

	city?		:		string; /** city of location */

	postcode?	:		string; /** postcode of location */

	adress1?	:		string; /** first adress of location */

	adress2?	:		string; /** seoond adress of location */
}

export interface ILocationUpdate {
	_id			:		number; /** ID of location */

	latitude?	:		string; /** latitude of location */

	longitude?	:		string; /** longitude of location */

	country?	:		string; /** country of location */

	city?		:		string; /** city of location */

	postcode?	:		string; /** postcode of location */

	adress1?	:		string; /** first adress of location */

	adress2?	:		string; /** seoond adress of location */
}

export interface ILocationDelete {
	_id			:		number; /** ID of location */
}