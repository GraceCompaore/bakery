import { apiUrl } from './api';

export default class CommandApi {
  static baseUrl = `${apiUrl}/command`;

  static create() {
    return fetch(CommandApi.baseUrl, {
      method: 'GET',
      body: JSON.stringify(commandDto),
    }).then((response) => response.json());
  }

  static findAll() {
    return fetch(CommandApi.baseUrl, { method: 'GET' }).then((response) =>
      response.json()
    );
  }

  static delete(commandId) {
    return fetch(`${CommandApi.baseUrl}/${commandId}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }

  static update(commandId, command) {
    return fetch(`${CommandApi.baseUrl}/${commandId}`, {
      method: 'PUT',
      body: JSON.stringify(command),
    }).then((response) => response.json());
  }
}
