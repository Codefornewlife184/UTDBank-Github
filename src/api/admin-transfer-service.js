import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;
const getAllTransfers = () => {
  return axios.get(`${API_URL}transfer/auth/all`, {
    headers: authHeader(),
  });
};

const getUserTransfer = (userId) => {
  return axios.get(`${API_URL}transfer/user/${userId}/auth`, {
    headers: authHeader(),
  });
};
const getTransfer = (transferId) => {
  return axios.get(`${API_URL}transfer/user/${transferId}/auth`, {
    headers: authHeader(),
  });
};
const getTransfersByAccountNo = (fromAccountId) => {
  return axios.get(`${API_URL}transfer/${fromAccountId}/accountNo/auth`, {
    headers: authHeader(),
  });
};

export {
  getAllTransfers,
  getUserTransfer,
  getTransfer,
  getTransfersByAccountNo,
};
