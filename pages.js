import {Page} from '/lib/page.js';

import Error404 from '/src/Error404.svelte';
import Home from '/src/Home.svelte';
import Buttons from '/src/Buttons.svelte';

export let page = Page.match([
    {path: '/', component: Home, title: 'Welcome!', shape: '_article'},
    {path: '/buttons', component: Buttons, title: 'Buttons', shape: '_buttons'},
    // {path: '/table', component: Tables, title: 'Tables', shape: '_wide'},
], {component: Error404, shape: '_narrow'});