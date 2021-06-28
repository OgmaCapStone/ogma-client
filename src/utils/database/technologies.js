import axios from "axios";

export const getTechnologies = async () => {
  const res = await axios
    .get(`${process.env.ENDPOINT_URL}/technologies/`)
    .then((res) => res.data);

  return res;
};
