import Api from './api';

export const addKeep = (data) => {
  return Api('post', '/add-keep', data);
};

export const changeKeep = (data) => {
  return Api('put', '/change-keep', data);
};

export const removeKeep = (data) => {
  return Api('delete', '/delete-keep', data);
};

export const getKeep = (data) => {
  return Api('get', '/keep', data);
};