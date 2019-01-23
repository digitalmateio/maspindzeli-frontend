import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://www.splashbase.co/api/v1/images/latest',
  });
};
