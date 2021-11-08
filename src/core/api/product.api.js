import { apiUrl } from './api';

export default class ProductApi {
  static baseUrl = `${apiUrl}/product`;

  static findAll() {
    return fetch(ProductApi.baseUrl, { method: 'GET' }).then(
      (response) => response && response.json()
    );
  }

  static findById(productId) {
    return fetch(`${ProductApi.baseUrl}/${productId}`, { method: 'GET' }).then(
      (response) => response.json()
    );
  }

  static add(product) {
    return fetch(ProductApi.baseUrl, {
      method: 'POST',
      body: JSON.stringify(product),
    }).then((response) => response.json());
  }

  static delete(productId) {
    return fetch(`${ProductApi.baseUrl}/${productId}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }

  static update(productId, product) {
    return fetch(`${ProductApi.baseUrl}/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    }).then((response) => response.json());
  }

  static findByName(productName) {
    return fetch(`${ProductApi.baseUrl}/${productName}`, {
      method: 'GET',
    }).then((response) => response.json());
  }
}
