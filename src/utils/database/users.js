import axios from "axios";

const { ENDPOINT_URL } = process.env;

export const getUser = async (username) => {
  const res = await axios
    .get(`${process.env.ENDPOINT_URL}/user?username=${username}`)
    .then((res) => res.data);

  return res;
};

export const getUsers = async () => {
  const res = axios
    .get(`${process.env.ENDPOINT_URL}/users/`)
    .then((res) => res.data);

  return res;
};

export const createUser = async (data) => {
  const res = axios
    .post(`${ENDPOINT_URL}/users/create`, data)
    .then((res) => res.data);

  return res;
};
