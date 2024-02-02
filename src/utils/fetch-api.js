/** @format */

import { API_KEY, BACKEND_URL } from '@/constants/config.js';

export const fetchApi = async (path, options = {}) => {
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`,
			...options,
		},
	};
	const reqUrl = `${BACKEND_URL}${path}`;

	try {
        const res = await fetch (reqUrl, mergedOptions)
	} catch (error) {}
};
