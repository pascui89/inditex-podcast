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
