export default class PersonApi {
  static baseUrl = `${apiUrl}/person`;

  static delete(personId) {
    return fetch(`${PersonApi.baseUrl}/${personId}`, { method: 'DELETE' }).then(
      (response) => response.json()
    );
  }

  static update(personId, person) {
    return fetch(`${PersonApi.baseUrl}/${personId}`, {
      method: 'PUT',
      body: JSON.stringify(person),
    }).then((response) => response.json());
  }
}
