import { apiClient } from './api';

export default class AuthApi {
  static login(loginDTo) {
    return apiClient
      .post('/auth', JSON.stringify(loginDTo))
      .then((response) => {
        const token = response.headers['authorization'];
        if (token) {
          localStorage.setItem('Token', token);
        }
        return !!token;
      })
      .catch((reason) => {
        console.log(reason);
        return false;
      });
  }
}
