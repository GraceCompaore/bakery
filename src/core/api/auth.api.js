import { apiUrl } from './api';

export default class AuthApi {
  static baseUrl = `${apiUrl}/auth`;

  static login(loginDTo) {
    return fetch(AuthApi.baseUrl, {
      method: 'POST',
      body: JSON.stringify(loginDTo),
    }).then((response) => response.json());
  }
}
