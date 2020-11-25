import axios from 'axios';
import ENV from 'react-native-config';
import strings from 'localization';

const client = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      throw new Error(strings.connectionError);
    }

    return Promise.reject(error);
  }
);

export default client;
