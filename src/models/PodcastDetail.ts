import { Episode } from './Episode';

export interface PodcastDetail {
  resultCount: number;
  results: Episode[];
}

export const mockPodcastDetail: PodcastDetail = {
  resultCount: 21,
  results: [
    {
      country: 'USA',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/31/d3/f2/31d3f28f-434c-45cc-17cf-ffcdfda0d78a/mza_9731489490781341652.jpg/600x600bb.jpg',
      feedUrl:
        'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
      closedCaptioning: 'none',
      collectionId: 1096830182,
      collectionName: 'Drink Champs',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/31/d3/f2/31d3f28f-434c-45cc-17cf-ffcdfda0d78a/mza_9731489490781341652.jpg/60x60bb.jpg',
      artistViewUrl:
        'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
      artworkUrl160:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/31/d3/f2/31d3f28f-434c-45cc-17cf-ffcdfda0d78a/mza_9731489490781341652.jpg/160x160bb.jpg',
      episodeContentType: 'audio',
      collectionViewUrl:
        'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
      trackTimeMillis: 9813000,
      episodeFileExtension: 'mp3',
      genres: [{ name: 'Music', id: '1310' }],
      episodeGuid: 'e7668686-4c6c-4176-90ba-b01b0112eaf5',
      description: 'N.O.R.E. & DJ EFN are the Drink Champs...',
      shortDescription: '',
      releaseDate: '2023-06-09T07:01:00Z',
      previewUrl:
        'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/e7668686-4c6c-4176-90ba-b01b0112eaf5/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
      artistIds: [284341002],
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/episode-367-w-de-la-soul/id1096830182?i=1000616244153&uo=4',
      episodeUrl:
        'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/e7668686-4c6c-4176-90ba-b01b0112eaf5/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
      trackId: 1000616244153,
      trackName: 'Episode 367 w/ De La Soul',
      kind: 'podcast-episode',
      wrapperType: 'podcastEpisode',
    },
  ],
};
