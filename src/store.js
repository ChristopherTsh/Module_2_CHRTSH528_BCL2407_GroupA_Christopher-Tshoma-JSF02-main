import { writable } from 'svelte/store';

export const productsStore = writable([]);
export const filteredProductsStore = writable([]);
export const loadingStore = writable(true);
export const sortOptionStore = writable('');
export const categoriesStore = writable([]);
export const selectedCategoryStore = writable('');
export const searchQueryStore = writable('');