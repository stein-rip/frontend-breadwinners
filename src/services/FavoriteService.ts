import axios from "axios";
import Favorite from "../models/Favorite";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getFavorites = async (userId: string): Promise<Favorite[]> => {
  return (
    await axios.get(`${baseURL}/users/${encodeURIComponent(userId)}/favorites`)
  ).data;
};

export const addFavorite = async (
  newFavorite: Favorite,
  userId: string
): Promise<Favorite> => {
  return (
    await axios.post(
      `${baseURL}/users/${encodeURIComponent(userId)}/favorites`,
      newFavorite
    )
  ).data;
};

export const deleteFavorite = async (
  userId: string,
  id: string
): Promise<void> => {
  await axios.delete(
    `${baseURL}/users/${encodeURIComponent(
      userId
    )}/favorites/${encodeURIComponent(id)}`
  );
};
