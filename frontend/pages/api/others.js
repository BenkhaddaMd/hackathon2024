import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = "http://localhost:3003"

export const AddOfferApi = async (data) => {
  const token = Cookies.get('authToken');

  return await axios.post(`${API_BASE_URL}/offers`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getOffersApi = async () => {
    const token = Cookies.get('authToken');
  
    return await axios.get(`${API_BASE_URL}/offers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
};

export const getOffersByUserApi = async (userID) => {
  const token = Cookies.get('authToken');

  return await axios.get(`${API_BASE_URL}/offers/user/${userID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getOffersByIdApi = async (offerId) => {
  const token = Cookies.get('authToken');

  return await axios.get(`${API_BASE_URL}/offers/${offerId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getOfferApplicationsUsersApi = async (offerId) => {
  const token = Cookies.get('authToken');

  return await axios.get(`${API_BASE_URL}/offers/${offerId}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const AddPostApi = async (data) => {
    const token = Cookies.get('authToken');
  
    return await axios.post(`${API_BASE_URL}/post`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
};

export const getPostsApi = async () => {
    const token = Cookies.get('authToken');
  
    return await axios.get(`${API_BASE_URL}/post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
};

export const getPostsByUserApi = async (userId) => {
  const token = Cookies.get('authToken');

  return await axios.get(`${API_BASE_URL}/post/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const ApplyApi = async (data) => {
  const token = Cookies.get('authToken');

  return await axios.post(`${API_BASE_URL}/applications`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const GetApplicationByUserApi = async (userId) => {
  const token = Cookies.get('authToken');

  return await axios.get(`${API_BASE_URL}/applications/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};