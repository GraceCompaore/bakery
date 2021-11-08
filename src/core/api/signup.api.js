export default class SignUpApi {
  static baseUrl = `${apiUrl}/sign-up`;

  static login(signUp) {
    return fetch(SignUpApi.baseUrl, {
      method: 'POST',
      body: JSON.stringify(signUp),
    }).then((response) => response.json());
  }
}
