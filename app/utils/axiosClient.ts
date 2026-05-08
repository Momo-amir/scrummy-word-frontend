import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Unexpected server error';

      console.error('API Error:', message);

      return Promise.reject(new Error(message));
    }

    return Promise.reject(new Error('Unknown error occurred'));
  }
);
export default axiosClient;
