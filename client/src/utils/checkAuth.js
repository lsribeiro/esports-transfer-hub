//TODO: Refactor
let authenticate = new Promise((resolve, reject) => {
	fetch('/api/auth')
		.then(res => res.json())
		.then(data => {
			if(data.type === 'error') {
				reject(data);
			} else {
				resolve(data);
			}
		});
});

export default authenticate;
