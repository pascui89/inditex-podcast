export interface Episode {
  episodeUrl: string;
  trackTimeMillis: number;
  artistIds: number[];
  collectionViewUrl: string;
  description: string;
  shortDescription: string;
  feedUrl: string;
  closedCaptioning: string;
  trackId: number;
  trackName: string;
  releaseDate: string;
  collectionId: number;
  collectionName: string;
  country: string;
  artworkUrl600: string;
  episodeFileExtension: string;
  artworkUrl160: string;
  episodeContentType: string;
  previewUrl: string;
  artworkUrl60: string;
  artistViewUrl: string;
  trackViewUrl: string;
  genres: { name: string; id: string }[];
  episodeGuid: string;
  kind: string;
  wrapperType: string;
}

export const episodeMock: Episode = {
  episodeUrl: 'https://example.com/episode123',
  trackTimeMillis: 3600000,
  artistIds: [1, 2, 3],
  collectionViewUrl: 'https://example.com/collection123',
  description: 'This is the episode description',
  shortDescription: 'Short description',
  feedUrl: 'https://example.com/feed',
  closedCaptioning: 'none',
  trackId: 123,
  trackName: 'Episode 123',
  releaseDate: '2023-06-19',
  collectionId: 456,
  collectionName: 'Podcast Collection',
  country: 'US',
  artworkUrl600: 'https://example.com/artwork600',
  episodeFileExtension: 'mp3',
  artworkUrl160: 'https://example.com/artwork160',
  episodeContentType: 'audio/mpeg',
  previewUrl: 'https://example.com/preview',
  artworkUrl60: 'https://example.com/artwork60',
  artistViewUrl: 'https://example.com/artist',
  trackViewUrl: 'https://example.com/track',
  genres: [
    { name: 'Genre 1', id: 'genre1' },
    { name: 'Genre 2', id: 'genre2' },
  ],
  episodeGuid: 'episode123',
  kind: 'podcast-episode',
  wrapperType: 'track',
};
