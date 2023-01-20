
// Revisa que la informacion en el API sea la misma que buscamos
export default async function fetchData(url: string) {
	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			},
		});
		if(!res.ok) {
			throw new Error('Bad response');
		}
		return await res.json();
	} catch(err) {
		console.error(`Error while fetching data: ${err}`)
		return null;
	}


}