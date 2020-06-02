import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-19-dados-abertos.p.rapidapi.com/covid/v1.0/all",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-key": "b534ad06b1msh915e8bab0717aa7p1007bdjsn282c91b427eb"
  }
});

export default api;
