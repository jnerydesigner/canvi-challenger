import { Api } from ".";

export const FetchLogin = async () => {
  const response = await Api.post("/auth");

  return response.data;
};
