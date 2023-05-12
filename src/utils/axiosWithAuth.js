import axios from "axios";

export default function axiosWithAuth(token) {
  return axios.create({
    baseURL: "http://localhost:5001",
    headers: { authorization: token },
  });
}
