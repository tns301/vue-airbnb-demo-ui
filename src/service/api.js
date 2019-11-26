import axios from "axios";

const ApiService = {
  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource, data) {
    return axios.delete(resource, { data });
  },

  customRequest(data) {
    return axios(data);
  }
};

export default ApiService;
