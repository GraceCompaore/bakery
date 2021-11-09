import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiSecureClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('Token'),
    'Content-Type': 'application/json',
  },
});

apiSecureClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // const access_token = localStorage.getItem('Token');
    // if (error.response.status === 401 && access_token) {
    //   console.error(error);
    // } else {
    //   console.error(error);
    // }
    console.error(error);

    return Promise.reject(error);
  }
);

export { apiClient, apiSecureClient };
