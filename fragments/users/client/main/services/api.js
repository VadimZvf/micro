import axios from 'axios';

import urls from './urls';

const request = axios.create({});

export const fetchUsers = () => request.get(urls.request('users/fetch'));

export default { fetchUsers };
