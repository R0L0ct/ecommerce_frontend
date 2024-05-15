import axios from "axios";

const API = "http://localhost:3001";

const axiosInstance = axios.create({
  withCredentials: true,
});

const registerUser = async (data: any): Promise<any> => {
  try {
    const response = await axiosInstance.post(
      `${API}/api/v1/auth/register`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

const login = async (data: any): Promise<any> => {
  try {
    const response = await axiosInstance.post(`${API}/api/v1/auth/login`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    const response = await axiosInstance.get(`${API}/api/v1/auth/logout`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const validateSession = async (data: any) => {
  try {
    const response = await axiosInstance.post(
      `${API}/api/v1/auth/validate-session`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const refreshToken = async () => {
  try {
    const response = await axiosInstance.get(
      `${API}/api/v1/auth/refresh-token`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
// User
const getOneUser = async (username: string) => {
  try {
    const response = await axiosInstance.get(`${API}/api/v1/users/${username}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
// Customer
const createCustomer = async (data: any) => {
  try {
    const response = await axiosInstance.post(`${API}/api/v1/customer`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateCustomer = async (id: any, data: any) => {
  try {
    const response = await axiosInstance.patch(
      `${API}/api/v1/customer/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
// Order

const createOrder = async (data: any) => {
  try {
    const response = await axiosInstance.post(`${API}/api/v1/order`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Order Product

const createOrderProduct = async (data: any) => {
  try {
    const response = await axiosInstance.post(
      `${API}/api/v1/order-product`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export {
  registerUser,
  login,
  logout,
  validateSession,
  refreshToken,
  createCustomer,
  updateCustomer,
  createOrder,
  createOrderProduct,
  getOneUser,
};
