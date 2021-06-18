export const initialState = {
  email: "",
  password: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "change":
      const { name, value } = action.e.target;
      const data = {};

      data[name] = value;

      return {
        ...state,
        ...data,
      };

    default:
      throw new Error();
  }
}
