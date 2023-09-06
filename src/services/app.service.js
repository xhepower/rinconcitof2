import http from "../http-commons";

//const axios = require("axios").default;
const obtenerToken = () => {
  let token;
  if (localStorage.getItem("superdupertoken")) {
    token = localStorage.getItem("superdupertoken");
  } else {
    token = null;
  }
  return token;
};
console.log(obtenerToken());
http.defaults.headers.common = { Authorization: `bearer ${obtenerToken()}` };

class AppService {
  getAll() {
    return http.get("/pdfs", { timeout: 30000 });
  }
  getOne(id) {
    return http.get(`/users/${id}`, { timeout: 30000 });
  }
  save(data) {
    return http.post(`/users`, data);
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
  update(id, data) {
    return http.patch(`/users/${id}`, data);
  }
  getPhoto(pdf) {
    return http.get(`/users/${pdf}`);
  }
}

export default new AppService();
