import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import {
	ElButton,
	ElInput,
	ElForm,
	ElTabPane,
	ElTabs,
	ElFormItem,
	ElCheckbox,
	ElLink
} from "element-plus";
const components = [
	ElButton,
	ElInput,
	ElTabPane,
	ElTabs,
	ElForm,
	ElFormItem,
	ElCheckbox,
	ElLink
];
export function registerElment(app: App): void {
	for (const component of components) {
		app.component(component.name, component);
	}
}
