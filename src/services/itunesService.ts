import axios from 'axios';
import { Episode, Podcast, PodcastDetail } from '../models';

const ALL_ORIGINS_URL = 'https://api.allorigins.win/get?url=';

/**
 * Retrieves the details of a podcast.
 * @param id - The ID of the podcast.
 * @param limit - The limit of episodes to retrieve (default: 100).
 * @returns A promise that resolves with the podcast details.
 */
export const fetchDetail = async (
  id: string
): Promise<PodcastDetail> => {
  const response = await axios.get(
    `${ALL_ORIGINS_URL}${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=100`
    )}`
  );
  return JSON.parse(response.data.contents) as PodcastDetail;
};

/**
 * Retrieves the details of an episode.
 * @param episodeId - The ID of the episode.
 * @param limit - The limit of episodes to retrieve (default: 100).
 * @returns A promise that resolves with the episode details.
 */
export const fetchEpisode = async (
  episodeId: number,
  limit: number = 100
): Promise<Episode> => {
  const response = await axios.get<Episode>(
    `${ALL_ORIGINS_URL}${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${episodeId}&media=podcast&entity=podcastEpisode&limit=${limit}`
    )}`
  );
  return response.data;
};

/**
 * Retrieves the list of podcasts.
 * @param limit - The limit of podcasts to retrieve (default: 100).
 * @returns A promise that resolves with the list of podcasts.
 */
export const fetchPodcasts = async (limit: number = 100): Promise<Podcast> => {
  const response = await axios.get(
    `${ALL_ORIGINS_URL}${encodeURIComponent(`https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`)}`
  );
  return JSON.parse(response.data.contents) as Podcast;
};
