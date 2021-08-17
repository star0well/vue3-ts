import hyRequest from "../index";
import type { IAccount, IDataType, IDataResult } from "./types";
enum LoginAPI {
	AccountLogin = "/login",
	LoginUserInfo = "/users/",
	UserMenu = "/role/" ///role/1/menu
}
export function accountLoginRequest(account: IAccount) {
	return hyRequest.post<IDataType<IDataResult>>({
		url: LoginAPI.AccountLogin,
		data: account
	});
}
export function requestUserInfoById(id: number) {
	return hyRequest.get<IDataType>({
		url: LoginAPI.LoginUserInfo + id,
		showLoading: false
	});
}
export function requestUserMenuByRoleId(id: number) {
	return hyRequest.get<IDataType>({
		url: LoginAPI.UserMenu + id + "/menu",
		showLoading: false
	});
}
