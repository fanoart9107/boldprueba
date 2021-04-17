/**
 * Servicio de consumo a pagos
 */

import { API_URL, PAYMENT_API_ENDPOINT } from "./constants";

export default {
  /**
   * Obtiene los pagos desde el API
   */
  getPayments: async () => {
    try {
      const serverResponse = await fetch(API_URL + PAYMENT_API_ENDPOINT);

      if (!serverResponse.ok) {
        const message = `Ha ocurrido un error: ${serverResponse.status}`;
        throw new Error(message);
      }

      const returnResponse = await serverResponse.json();
      return returnResponse;
    } catch (error) {
      throw Error("No se pudo obtener datos del API", error);
    }
  },
};
