import axios from "axios";

export const getTechnologies = async () => {
  const res = await axios
    .get(`${process.env.ENDPOINT_URL}/technologies/`)
    .then((res) => res.data);

  return res;
};

export const insertTechnology = async (data) => {
  const res = await axios
    .post(`${process.env.ENDPOINT_URL}/user/technology/add`, data)
    .then((res) => res.data);

  return res;
};
