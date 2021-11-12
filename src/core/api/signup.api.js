import { apiClient, apiSecureClient } from './api';

export default class SignUpApi {
  static signup(signUp) {
    return apiClient
      .post('/sign-up', JSON.stringify(signUp))
      .then((response) => response.data);
  }

  static signupAdmin(signUp) {
    return apiSecureClient
      .post('/admin/sign-up', JSON.stringify(signUp))
      .then((response) => response.data);
  }
}
