// post booking
export const saveBooking = async (bookInfo) => {
  const url = `${process.env.REACT_APP_API_URL}/bookings`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.getItem('joldikino-token')}`
    },
    body: JSON.stringify(bookInfo)
  });
  const data = await response.json();
  return data;
}