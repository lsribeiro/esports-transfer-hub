//TODO: Refactor
async function authenticate() {
	let isAuthorized = false;

	let res = await fetch('/api/auth/');

	if(res.status === 200) { isAuthorized = true; }

	return isAuthorized;
}

export default authenticate;
