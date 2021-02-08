import App from './App.svelte';
import Header from './components/Header.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte'
	}
});

export default app;