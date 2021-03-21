const baseUrl = 'http://localhost:3000';

export const fetchProducts = async page => {
  const res = await fetch(`${baseUrl}/products?_page=${page}&_limit=10`)
    .then(response => response.json())
    .then(data => data);

  return res;
};

export const fetchCart = async () => {
  const res = await fetch(`${baseUrl}/cart`)
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
  }).then(response => response.json());

  return res;
};

export const updateCart = async (id, data) => {
  const res = await fetch(`${baseUrl}/cart/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());

  return res;
};

export const requestAddToCart = async data => {
  const res = await fetch(`${baseUrl}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());

  return res;
};

export const deleteProduct = async id => {
  const res = await fetch(`${baseUrl}/products/${id}`, {
    method: 'DELETE'
  }).then(response => response.json());

  return res;
};

export const deleteProductFromCart = async id => {
  const res = await fetch(`${baseUrl}/cart/${id}`, {
    method: 'DELETE'
  }).then(response => response.json());

  return res;
};
