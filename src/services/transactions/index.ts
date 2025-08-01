import { api } from '@services/api';
import { handlerAxiosError } from '@utils/axiosError';

import { TransactionsFormPayload } from './interfaces';

const create = async (data: TransactionsFormPayload) => {
  try {
    const { data: response } = await api.post('/transactions', data);
    return response.resource;
  } catch (err) {
    handlerAxiosError(err);
  }
};

const get = async (page: number = 1, query?: string) => {
  try {
    const requestUrl = `/transactions?page=${page}${query ? `&${query}` : ''}`; 

    const { data: response } = await api.get(requestUrl);    
    
    return response.resource;
  } catch (err) {
    handlerAxiosError(err);
  }
};

export const transactionsApi = {
  create,
  get,
};