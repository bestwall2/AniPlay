
import { PopularAnimeQuery , TrendingAnimeQuery } from "../actions/QueryActions";

const API_URL = "https://graphql.anilist.co";

export const fetchTrendingAnime = async () => {
  try {
    const response = await fetchAniList(
      TrendingAnimeQuery
    );
    return response.data || []; // Return data if present
  } catch (error) {
    console.error(
      "Error fetching trending anime:",
      error
    );
    return []; // Fallback in case of failure
  }
};

export const fetchPopularAnime = async () => {
  try {
    const response = await fetchAniList(
      PopularAnimeQuery
    );
    return response.data || []; // Return data if present
  } catch (error) {
    console.error(
      "Error fetching trending anime:",
      error
    );
    return []; // Fallback in case of failure
  }
};

const fetchAniList = async query => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status}`
      );
    }

    const result = await response.json();

    if (result.errors) {
      console.error(
        "GraphQL Errors:",
        result.errors
      );
      throw new Error(
        "Failed to fetch GraphQL data"
      );
    }

    return result;
  } catch (error) {
    console.error(
      "Fetch AniList Error:",
      error
    );
    throw error; // Re-throw for caller handling
  }
}

