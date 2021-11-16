import { apiClient, apiSecureClient } from './api';

export default class SignUpApi {
  static signup(signUp) {
    return apiClient.post('/sign-up', JSON.stringify(signUp)).then(
      (response) => true,
      (reason) => {
        console.error(reason);
        return false;
      }
    );
  }

  static signupAdmin(signUp) {
    return apiSecureClient
      .post('/admin/sign-up', JSON.stringify(signUp))
      .then((response) => response.data);
  }
}
