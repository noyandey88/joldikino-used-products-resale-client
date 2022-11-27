// save payment info in database
export const savePaymentInfo = async (paymentInfo) => {
  const url = `${process.env.REACT_APP_API_URL}/payments`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    },
    body: JSON.stringify(paymentInfo)
  });
  const data = await response.json();
  return data;
}