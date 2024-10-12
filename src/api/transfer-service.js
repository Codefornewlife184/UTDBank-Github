import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getTransfers = () => {
  return axios.get(`${API_URL}transfer`, { headers: authHeader() });
};

/******************* CUSTOMER,MANAGER/EMPLOYEE(JUST FOR OWN) ************************************/
const createTransfer = (transfer) => {
  return axios.post(`${API_URL}transfer/create`, transfer, {
    headers: authHeader(),
  });
};

const getTransferById = (transferId) => {
  return axios.get(`${API_URL}transfer/${transferId}`, {
    headers: authHeader(),
  });
};

/******************* MANAGER/EMPLOYEE(RESTRICTED) ************************************/
const getAllTransfers = () => {
  return axios.get(`${API_URL}transfer/auth/all`, { headers: authHeader() });
};
const getTransfersByUserId = (userId) => {
  return axios.get(`${API_URL}transfer/user/${userId}/auth`, {
    headers: authHeader(),
  });
};
const getTransferByTransferId = (transferId) => {
  return axios.get(`${API_URL}transfer/${transferId}/auth`, {
    headers: authHeader(),
  });
};

export {
  createTransfer,
  getTransfers,
  getTransferById,
  getAllTransfers,
  getTransfersByUserId,
  getTransferByTransferId,
};
