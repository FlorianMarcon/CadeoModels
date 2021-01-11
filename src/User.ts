import IBrand from './seller/Brand'
export enum Roles {
	ADMIN = 'ADMIN',
	LAMBDA = 'LAMBDA',
	SELLER = 'SELLER',
}

export interface IUser {
	_id			:		string; /** Id of the user */

	firstname	:		string; /** User's firstname */

	lastname	:		string; /** User's lastname */

	email		:		string; /** User's email */

	confirmed	:		boolean; /** User's has confirmed his email */
	phone		:		string; /** User's phone number */

	birthDate	:		Date;	/** User's birth date */

	role		:		Roles; /** User's role */

	/** FIELD RESOLVER */
	brands		:		Array<IBrand>  /** User's brand */

	currentBrand?:		IBrand; /** Brand currently used */
}

export interface IUserCreate {
	firstname	:		string; /** User's firstname */

	lastname	:		string; /** User's lastname */

	email		:		string; /** User's email */

	password	:		string; /** User's password */

	phone		:		string; /** User's phone */

	birthDate	:		Date; /** User's birth date */
	
	role		:	Roles; /** User's role */
}

export interface IUserUpdate {
	_id			:		string /** (optional) User's _id */;

	firstname?	:		string /** (optional) User's firstname */;

	lastname?	:		string /** (optional) User's lastname */;

	phone?		:		string /** (optional) User's phone */;

	birthDate?	:		Date /** (optional) User's birth date */;
}

export interface IUserDelete {
	_id			:		string;
}

export interface IAuth {

	email		:		string;

	password	:		string;
}