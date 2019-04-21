import axios from 'axios';

import urls from './urls';

const request = axios.create({});

export const fetchProduct = productId => request.get(urls.request('product', productId));

export default { fetchProduct };
