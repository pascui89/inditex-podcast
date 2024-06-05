import axios from 'axios';
import { Episode, Podcast, PodcastDetail } from '../models';

const CUSTOM_PROXY_URL = '/proxy?url=';
const ITUNES_URL = 'https://itunes.apple.com/';

/**
 * Retrieves the details of a podcast.
 * @param id - The ID of the podcast.
 * @param limit - The limit of episodes to retrieve (default: 100).
 * @returns A promise that resolves with the podcast details.
 */
export const fetchDetail = async (id: string): Promise<PodcastDetail> => {
  const { data } = await axios.get(
    `${CUSTOM_PROXY_URL}${encodeURIComponent(
      `${ITUNES_URL}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=100`
    )}`
  );
  return data as PodcastDetail;
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
  const {data} = await axios.get<Episode>(
    `${CUSTOM_PROXY_URL}${encodeURIComponent(
      `${ITUNES_URL}lookup?id=${episodeId}&media=podcast&entity=podcastEpisode&limit=${limit}`
    )}`
  );

  return data;
};

/**
 * Retrieves the list of podcasts.
 * @param limit - The limit of podcasts to retrieve (default: 100).
 * @returns A promise that resolves with the list of podcasts.
 */
export const fetchPodcasts = async (limit: number = 100): Promise<Podcast> => {
  const { data } = await axios.get(
    `${CUSTOM_PROXY_URL}${`${ITUNES_URL}us/rss/toppodcasts/limit=${limit}/genre=1310/json`}`
  );
  return data as Podcast;
};
