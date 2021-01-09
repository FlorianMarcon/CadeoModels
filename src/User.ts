import IBrand from './seller/Brand'
export enum Roles {
	ADMIN = 'ADMIN',
	LAMBDA = 'LAMBDA',
	SELLER = 'SELLER',
}

export interface IUser {
	_id			:		string;

	firstname	:		string;

	lastname	:		string;

	email		:		string;

	confirmed	:		boolean;
	phone		:		string;

	birthDate	:		Date;

	role		:		Roles;

	brands		:		Array<IBrand>

	currentBrand?:		IBrand
}

export interface IUserCreate {
	firstname	:		string;

	lastname	:		string;

	email		:		string;

	password	:		string;

	phone		:		string;

	birthDate	:		Date;
	
	role		:	Roles;
}

export interface IUserUpdate {
	_id			:		string;

	firstname?	:		string;

	lastname?	:		string;

	phone?		:		string;

	birthDate?	:		Date;
}

export interface IUserDelete {
	_id			:		string;
}

export interface IAuth {

	email		:		string;

	password	:		string;
}