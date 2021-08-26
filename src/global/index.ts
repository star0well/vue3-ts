import { App } from 'vue';
import { registerElment } from './register-element';
import { registerProperties } from './register-properties';

export function registterApp(app: App): void {
	registerElment(app);
	registerProperties(app);
}
