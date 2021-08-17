export interface IAccount {
	name: string;
	password: number;
}
export interface IDataResult {
	id: number;
	name: string;
	token: string;
}
export interface IDataType<T = any> {
	code: number;
	data: T;
}
export interface IUserInfoData {
	data: any;
	// role: any;
}
export interface IUserMenuType {
	data: any;
}
