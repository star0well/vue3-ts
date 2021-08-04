import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import {
	ElButton,
	ElInput,
	ElAside,
	ElAlert,
	ElAutocomplete,
	ElTabPane,
	ElTabs
} from "element-plus";
const components = [
	ElButton,
	ElInput,
	ElAside,
	ElAlert,
	ElAutocomplete,
	ElTabPane,
	ElTabs
];
export function registerElment(app: App): void {
	for (const component of components) {
		app.component(component.name, component);
	}
}
