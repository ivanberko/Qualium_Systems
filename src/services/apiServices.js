const baseUrl = 'http://localhost:3000';

export const fetchProducts = async () => {
  const res = await fetch(`${baseUrl}/products`)
    .then(response => response.json())
    .then(data => data);

  return res;
};

export const updateProducts = async (id, data) => {
  const res = await fetch(`${baseUrl}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json());

  return res;
};
