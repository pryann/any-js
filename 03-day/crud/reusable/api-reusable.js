export function createApi(slug) {
  const dataUrl = `http://localhost:3000/${slug}`

  async function fetchData() {
    const data = await fetch(dataUrl)
    return data.json()
  }

  async function findData(id) {
    const data = await fetch(`${dataUrl}/${id}`)
    return data.json()
  }

  async function removeData(id) {
    fetch(`${dataUrl}/${id}`, {
      method: 'DELETE',
    })
  }

  async function updateData(id, data) {
    const updatedData = await fetch(`${dataUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return updatedData.json()
  }

  async function createData(data) {
    const newData = await fetch(dataUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return newData.json()
  }

  return {
    fetchData,
    findData,
    removeData,
    updateData,
    createData,
  }
}
