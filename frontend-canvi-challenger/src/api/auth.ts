import { Api } from ".";

export const FetchLogin = async () => {
  const response = await Api.post("/auth");

  console.log(response.data);

  return response.data;
};
