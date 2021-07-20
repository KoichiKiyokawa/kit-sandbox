export async function baseFetch<Body = Record<string, unknown>, Resp = void>(
	endpoint: string,
	method: 'GET' | 'POST' = 'GET',
	data?: Body
): Promise<{ data: Resp | null; error: Error | null; status: number }> {
	let res: Response;
	try {
		res = await fetch(`http://localhost:8080/${endpoint}`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method,
			...(data && { body: JSON.stringify(data) }),
			credentials: 'include' // keep cookies for any domain
		});
	} catch (err) {
		console.error(err);
		return { data: null, error: err, status: 500 };
	}

	if (!res.ok) return { data: null, error: new Error(res.statusText), status: res.status };

	try {
		return { data: await res.json().catch(() => res.text), error: null, status: res.status };
	} catch (err) {
		console.error(err);
		return { data: null, error: err, status: -1 };
	}
}
