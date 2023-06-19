import { useEffect, useState } from 'react';
import { PodcastEntry } from '../../models';

/**
 * Custom hook for retrieving a specific podcast entry from a list of podcast entries.
 * 
 * @param {string | undefined} podcastId - The ID of the podcast entry to retrieve.
 * @param {PodcastEntry[]} podcastEntries - The list of podcast entries to search within.
 * @returns {Object} - An object containing the retrieved podcast entry and a setter function.
 */
export const usePodcast = (
  podcastId: string | undefined,
  podcastEntries: PodcastEntry[]
) => {
  const [podCast, setPodCast] = useState<PodcastEntry | undefined>();

  useEffect(() => {
    const item = podcastEntries.find(
      (item: PodcastEntry) => item.id.attributes['im:id'] === podcastId
    );
    setPodCast(item);
  }, [podcastId]);

  return { podCast, setPodCast };
};
