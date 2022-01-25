import Axios from 'axios';

Axios.defaults.baseURL =
	'https://phpwebdevelopmentservices.com/project-react-backend';

export const axiosInstance = Axios.create({});
