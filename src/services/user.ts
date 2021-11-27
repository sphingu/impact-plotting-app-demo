import { URLS } from "../constants";
import { getDataFromAPI } from "../helpers/apiHelpers";
import { IUserList } from "../types/user";

export const getUsers = async (coordinates: L.LatLngExpression): Promise<IUserList> => {
  const userList = await getDataFromAPI<IUserList>(URLS.API);
  return userList;
}