import axios from 'axios';

const host = 'https://gekarik.github.io';
const Api = async (method, url, data, headers) => {
  try {
    return await axios({
      method: method,
      baseURL: `${host}${url}`,
      headers: headers,
      data: data,
    });
  } catch (e) {
    console.log('Erros');
    throw e;
  }
};

export default Api;