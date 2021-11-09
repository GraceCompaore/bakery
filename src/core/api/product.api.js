import { apiClient, apiSecureClient } from './api';

export default class ProductApi {
  static url = '/product';

  static findAll() {
    return apiClient
      .get(ProductApi.url)
      .then((response) => response && response.data);
  }

  static findById(productId) {
    return apiSecureClient
      .get(`${ProductApi.url}/${productId}`)
      .then((response) => response.data);
  }

  static add(product) {
    return apiSecureClient
      .post(ProductApi.url, JSON.stringify(product))
      .then((response) => response.data);
  }

  static delete(productId) {
    return apiSecureClient
      .delete(`${ProductApi.url}/${productId}`)
      .then((response) => response.data);
  }

  static update(productId, product) {
    return apiSecureClient
      .put(`${ProductApi.url}/${productId}`, JSON.stringify(product))
      .then((response) => response.data);
  }

  static findByName(productName) {
    return apiClient
      .get(`${ProductApi.url}/${productName}`)
      .then((response) => response.data);
  }
}
