import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID sy_IXeaZgAMSO3d_OZgxTWSyPJ710ZPy0b7GTQqOk2w",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImage;