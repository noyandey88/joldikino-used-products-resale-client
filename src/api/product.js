// advertise product
export const addToAdvertise = async (product) => {
  // delete old id
  delete product._id;
  delete product.isAdvertised;

  const url = `${process.env.REACT_APP_API_URL}/products/advertised`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    },
    body: JSON.stringify({ ...product })
  });
  const data = await response.json();
  return data;
};

// isAdvertise field update
export const updateAdvertiseStatus = async (product) => {
  const productId = product._id;
  const url = `${process.env.REACT_APP_API_URL}/products/${productId}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    },
    body: JSON.stringify({ isAdvertised: true })
  });
  const data = await response.json();
  return data;
}