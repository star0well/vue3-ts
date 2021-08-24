import { App } from 'vue';
import 'element-plus/lib/theme-chalk/base.css';
import {
	ElButton,
	ElInput,
	ElForm,
	ElTabPane,
	ElTabs,
	ElFormItem,
	ElCheckbox,
	ElLink,
	ElContainer,
	ElAside,
	ElHeader,
	ElMain,
	ElSubmenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElMenu,
	ElDropdown,
	ElDropdownMenu,
	ElDropdownItem,
	ElAvatar,
	ElRow,
	ElCol,
	ElDatePicker,
	ElSelect,
	ElOption,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElTable,
	ElTableColumn
} from 'element-plus';

const components = [
	ElButton,
	ElInput,
	ElTabPane,
	ElTabs,
	ElForm,
	ElFormItem,
	ElCheckbox,
	ElLink,
	ElContainer,
	ElAside,
	ElHeader,
	ElMain,
	ElSubmenu,
	ElMenuItem,
	ElMenuItemGroup,
	ElMenu,
	ElDropdown,
	ElDropdownMenu,
	ElDropdownItem,
	ElAvatar,
	ElRow,
	ElCol,
	ElDatePicker,
	ElSelect,
	ElOption,
	ElBreadcrumb,
	ElBreadcrumbItem,
	ElTable,
	ElTableColumn
];
export function registerElment(app: App): void {
	for (const component of components) {
		app.component(component.name, component);
	}
}
