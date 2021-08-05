import { IRootState } from "./types";

import LoginModule from "../login/login";

import { createStore } from "vuex";
const store = createStore<IRootState>({
	state: () => {
		return {
			name: "",
			age: 17
		};
	},
	modules: { LoginModule }
});
export default store;
