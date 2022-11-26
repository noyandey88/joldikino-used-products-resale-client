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
  const id = product._id;
  const url = `${process.env.REACT_APP_API_URL}/products/${id}`;
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

// delete a product
export const deleteProduct = async (id) => {
  const url = `${process.env.REACT_APP_API_URL}/products/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    }
  });
  const data = await response.json();
  return data;
}

// update a product stock status to booked
export const updateStockStatusBooked = async (product) => {
  const id = product._id;
  const url = `${process.env.REACT_APP_API_URL}/products/${id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    },
    body: JSON.stringify({ stock: 'booked' })
  });
  const data = await response.json();
  return data;
}

// update a product stock status to reported
export const updateStatusToReported = async (product) => {
  const id = product._id;
  const url = `${process.env.REACT_APP_API_URL}/products/${id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    },
    body: JSON.stringify({ status: 'reported' })
  });
  const data = await response.json();
  return data;
}