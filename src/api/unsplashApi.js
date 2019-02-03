import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0c47ccf04698963bf8cb68dd48ecba5a956905e3c572d6542dfae219fa84f551"
  }
});
