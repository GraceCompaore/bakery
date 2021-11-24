import { apiSecureClient } from './api';

export default class PersonApi {
  static url = '/person';

  static delete(personId) {
    return apiSecureClient
      .delete(`${PersonApi.url}/${personId}`)
      .then((response) => response.data);
  }

  static update(personId, person) {
    return apiSecureClient
      .update(`${PersonApi.url}/${personId}`, JSON.stringify(person))
      .then((response) => response.data);
  }
}
