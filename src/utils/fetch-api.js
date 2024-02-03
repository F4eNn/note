/** @format */

import { API_KEY, BACKEND_URL } from '@/constants/config.js';

export const fetchApi = async (path, options = {}) => {
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`,
		},
		...options,
	};
	const reqUrl = `${BACKEND_URL}/api/${path}`;

	try {
		const res = await fetch(reqUrl, mergedOptions);
		const { data } = await res.json();
		
		return { data, response: res };
	} catch (error) {
		console.error(error);
	}
};
