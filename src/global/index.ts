import { App } from "vue";
import { registerElment } from "./register-element";

export function registterApp(app: App): void {
	registerElment(app);
}
