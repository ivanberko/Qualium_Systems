export const findProduct = (title, products) =>
products.filter(product => product.title.toLowerCase().includes(title.toLowerCase()));