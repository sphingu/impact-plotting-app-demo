
export async function getDataFromAPI<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' }, })

    if (res.status !== 200) {
      throw new Error('INVALID_RESPONSE_STATUS');
    }

    return await res.json();
  } catch (error) {
    throw new Error('An error occurred while calling API');
  }
}