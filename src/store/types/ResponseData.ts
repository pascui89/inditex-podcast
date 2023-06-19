import { Episode, Podcast } from '.';

export interface ResponseData {
  resultCount: number;
  results: (Podcast | Episode)[];
}
