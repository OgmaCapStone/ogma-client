import axios from "axios";

const { ENDPOINT_URL } = process.env;

export const updateProgress = async (data) => {
  const res = await axios
    .put(`${ENDPOINT_URL}/user/progress/update`, data)
    .then((res) => res.data.response);

  return res;
};

export const getProgress = async (username) => {
  const res = await axios
    .get(`${ENDPOINT_URL}/user/progress?username=${username}`)
    .then((res) => res.data.response);

  return res;
};
