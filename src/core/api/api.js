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
    'Content-Type': 'application/json',
  },
});

apiSecureClient.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem('Token');
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

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
