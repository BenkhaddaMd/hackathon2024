import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = "http://localhost:3003"

export const SignUpApi = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/signup`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
};

export const LoginApi = async (data) => {
  return await axios.post(`${API_BASE_URL}/auth/login`, data);
};

export const ProfileApi = async () => {
  const token = Cookies.get('authToken');

  return await axios.get(`${API_BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};