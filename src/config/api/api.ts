import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
const api = axios.create({
  baseURL: "http://localhost:3000/",
  params: { offset: 0, limit: 10 },
});

export const getUsers = async () => {
  try {
    const dataUsers = await api.get("users");
    return dataUsers;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("axiosError", error);
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
