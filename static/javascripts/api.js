export async function fetchGET(url, params = {}) {
	const requestUrl = `${url}?${new URLSearchParams(params)}`

	try {
		const response = await fetch(requestUrl, {
			method: 'GET',
		})
		return processResponse(response)
	} catch (e) {
		return processError(e)
	}
}

export async function fetchPOST(url, params = {}) {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': window.csrfToken,
			},
			body: JSON.stringify(params),
		})
		return processResponse(response)
	} catch (e) {
		return processError(e)
	}
}

async function processResponse(response) {
	try {
		if (response.status !== 200) {
			throw response
		}

		const data = await response.json()

		return {
			status: response.status,
			data,
		}
	} catch (e) {
		return processError(e)
	}
}

function processError(e) {
	console.error(e)

	return {
		status: e.status ? e.status : null,
		data: null,
	}
}
