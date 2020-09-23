import axios from 'axios';
import env from 'react-native-config';
import strings from 'localization';

const client = axios.create({
  baseURL: env.API_URL,
  headers: { 'content-type': 'application/json' },
});

client.interceptors.request.use(
  config => config,
  error => {
    console.warn('Failed to make request with error:', error);
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      throw new Error(strings.connectionError);
    }

    console.warn('Request got response with error:', error);

    return Promise.reject(error);
  }
);

export default client;
