export async function fetchGET(url, params = {}) {
	const requestUrl = `${url}?${new URLSearchParams(params)}`
	const response = await fetch(requestUrl, {
		method: 'GET',
	})
	const data = await response.json()

	return {
		status: response.status,
		data,
	}
}

export async function fetchPOST(url, params = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': window.csrfToken,
		},
		body: JSON.stringify(params),
	})
	const data = await response.json()

	return {
		status: response.status,
		data,
	}
}
