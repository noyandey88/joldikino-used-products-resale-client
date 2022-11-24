// upload image on image bb
export const saveImage = async (imageData) => {

  const formData = new FormData();
  formData.append('image', imageData);
  const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;
  const response = await fetch(url, {
    method: 'POST',
    body: formData
  })
  const image = await response.json();
  return image?.data?.url;
}