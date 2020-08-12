// Library imports
import Axios from 'axios';
import envs from '../config/envs';

// File imports

const http = Axios.create({
	baseURL: envs.API_BASE_URL,
});

// Request interceptor
http.interceptors.request.use(async (request) => {
	request.headers = {
		...request.headers,
		Authorization: `Bearer sessionId`,
	};

	return request;
});

export default http;
