import { apiClient, apiSecureClient } from './api';

export default class CommandApi {
  static url = '/command';

  static create(commandPayload) {
    return apiSecureClient
      .post(CommandApi.url, JSON.stringify(commandPayload))
      .then((response) => response.data);
  }

  static findAll() {
    return apiSecureClient
      .get(CommandApi.url)
      .then((response) => response.data);
  }

  static delete(commandId) {
    return apiSecureClient
      .delete(`${CommandApi.url}/${commandId}`)
      .then((response) => response.data);
  }

  static update(commandId, command) {
    return apiSecureClient
      .put(`${CommandApi.url}/${commandId}`, JSON.stringify(command))
      .then((response) => response.data);
  }
}
