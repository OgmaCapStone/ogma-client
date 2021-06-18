import axios from "axios";

const { ENDPOINT_URL } = process.env;

export const getUser = async (id) => id;

export const getUsers = async () => true;

export const authenticateUser = async () => true;

export const createUser = async (data) => {
  const res = axios
    .post(`${ENDPOINT_URL}//users/create`, data)
    .then((res) => res.data);

  return res;
};
