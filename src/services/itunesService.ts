import axios from 'axios';
import { Episode, Podcast, PodcastDetail } from '../models';

const ALL_ORIGINS_URL = 'https://api.allorigins.win/get?url=';

export const fetchDetail = async (id: string, limit: number = 100): Promise<PodcastDetail> => {
    const response = await axios.get(
      `${ALL_ORIGINS_URL}${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limit}`
      )}`
    );
    return JSON.parse(response.data.contents) as PodcastDetail;
  };

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

export const fetchPodcasts = async (limit: number = 100): Promise<Podcast> => {
  const response = await axios.get(
    `${ALL_ORIGINS_URL}${`https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`}`
  );
  return JSON.parse(response.data.contents) as Podcast;
};
