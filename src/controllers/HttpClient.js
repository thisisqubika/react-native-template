import axios from 'axios';
import ENV from 'react-native-config';
import strings from '_localization';

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
      throw new Error(strings.network.connectionError);
    }

    return Promise.reject(error);
  }
);

const setAuthorization = token => {
  client.defaults.headers.common.authorization = token;
};

export default { ...client, setAuthorization };
