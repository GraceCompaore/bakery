import { apiClient } from './api';

export default class AuthApi {
  static login(loginDTo) {
    return apiClient
      .post('/auth', JSON.stringify(loginDTo))
      .then((response) => {
        console.log(response);
        if (response.headers.Authorization) {
          localStorage.setItem('Token', response.headers.Authorization);
        }
        return response.data;
      })
      .catch((reason) => {
        console.log(reason);
      });
  }
}
