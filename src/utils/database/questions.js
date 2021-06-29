import axios from "axios";

const { ENDPOINT_URL } = process.env;

export const getQuestions = async (tech, level) => {
  const res = await axios
    .get(`${ENDPOINT_URL}/questions?technology=${tech}&level=${level}`)
    .then((res) => res.data.response);

  return res;
};
