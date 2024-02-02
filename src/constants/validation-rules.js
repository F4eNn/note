/** @format */

export const validateInputTask = val => {
	if (val.trim().length === 0) {
		return 'This field is required';
	} else if (val.trim().length < 3) {
		return 'Must contain at least 3 characters';
	}
};
