import { ILoginState } from "./types";
import { IRootState } from "../main/types";

import { Module } from "vuex";
const LoginModule: Module<ILoginState, IRootState> = {
	namespaced: true,
	state() {
		return {
			token: "",
			userInfo: {}
		};
	},
	getters: {},
	mutations: {},
	actions: {
		accountLoginAction(payload: any) {
			console.log("执行accounLoginAcction", payload);
		}
	}
};

export default LoginModule;
