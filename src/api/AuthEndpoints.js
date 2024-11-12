import { apiClient } from "@/api/index.js";

export default {
  login: payload => {
    return apiClient.appService.post(
      "endpoint_url",
      payload
    );
  },

  signup: payload => {
    return apiClient.appService.post(
      "endpoint_url",
      payload
    );
  },

  verify: payload => {
    return apiClient.appService.post(
      "endpoint_url",
      payload
    );
  }
};
