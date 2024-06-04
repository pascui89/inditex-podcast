import axios from 'axios';
import { podcastMock } from '../../models/Podcast';
import { mockPodcastDetail } from '../../models/PodcastDetail';
import { fetchDetail, fetchPodcasts } from '../../services/itunesService';

jest.mock('axios');

const ALL_ORIGINS_URL = 'https://api.allorigins.win/get?url=';
describe('API Integration Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchDetail', () => {
    it('should retrieve the details of a podcast', async () => {
      const mockResponse = {
        data: {
          contents: JSON.stringify(mockPodcastDetail),
        },
      };

      axios.get = jest.fn();
      (axios.get as jest.Mock).mockResolvedValue(mockResponse);

      const id = '123';

      const result = await fetchDetail(id);

      expect(axios.get).toHaveBeenCalledWith(
        `${ALL_ORIGINS_URL}${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=100`
        )}`
      );
      expect(result).toEqual(mockPodcastDetail);
    });
  });

  describe('fetchPodcasts', () => {
    it('should retrieve the list of podcasts', async () => {
      const mockResponse = {
        data: {
          contents: JSON.stringify(podcastMock),
        },
      };

      (axios.get as jest.Mock).mockResolvedValue(mockResponse);

      const limit = 100;

      const result = await fetchPodcasts(limit);

      expect(axios.get).toHaveBeenCalledWith(
        `${ALL_ORIGINS_URL}${encodeURIComponent(
          `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
        )}`
      );
      expect(result).toEqual(podcastMock);
    });
  });
});
