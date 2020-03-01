import axios, { AxiosResponse } from 'axios';
import { ShopQuantity } from '../../../types';

export const GetShopQuantitiesApi = (): Promise<AxiosResponse<ShopQuantity>> =>
  axios.get('/shopQuantity', {
    params: { shop: '2e2b8431-791f-45ff-9982-fe491f5f9d6d' }
  });
