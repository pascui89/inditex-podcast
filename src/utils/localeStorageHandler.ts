import { Podcast } from "../models";

/**
 * Interface for the data stored in local storage.
 */
interface LocalStorageData {
    value: Podcast;
    expiry: number;
  }
  
  /**
   * Retrieves the data from local storage.
   * @returns The parsed local storage data.
   */
  export const getLocalStorageData = (): LocalStorageData | null => {
    return localStorage.getItem('podcastItems') ? JSON.parse(localStorage.getItem('podcastItems') || '') as LocalStorageData : null;
  };
  
  /**
   * Sets the data in local storage.
   * @param podcasts - The podcast data to be stored.
   */
  export const setLocalStorageData = (podcasts: Podcast): void => {
    const data = {
      value: podcasts,
      expiry: new Date().getTime() + (24 * 60 * 60 * 1000),
    } as LocalStorageData;
    localStorage.setItem('podcastItems', JSON.stringify(data));
  };
  