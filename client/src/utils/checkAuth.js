//TODO: Refactor
async function authenticate() {
	let isAuthorized = false;

    await fetch('/api/auth/')
        .then(res => {
          	if (res.status === 200) {
          		isAuthorized = true;
          	} 
        })
        .catch(err => {
          	//TODO: Fix error handling
          	console.error(err);
        });

    return isAuthorized;
}

export default authenticate;
