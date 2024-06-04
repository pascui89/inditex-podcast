import { podcastMock } from '../../models/Podcast';
import { getLocalStorageData, setLocalStorageData } from '..';

describe('LocalStorage Utils', () => {
  beforeEach(() => {
    // Limpia el almacenamiento local antes de cada prueba
    localStorage.clear();
  });

  describe('getLocalStorageData', () => {
    test('should return null if local storage is empty', () => {
      const localStorageData = getLocalStorageData();
      expect(localStorageData).toBeNull();
    });

    test('should return parsed local storage data', () => {
      const podcastData = {
        id: '1',
        title: 'Podcast Title',
        // ...
      };

      // Guarda los datos en el almacenamiento local
      localStorage.setItem('podcastItems', JSON.stringify(podcastData));

      const localStorageData = getLocalStorageData();
      expect(localStorageData).toEqual(podcastData);
    });
  });

  describe('setLocalStorageData', () => {
    test('should store the provided podcast data in local storage', () => {
      const podcastData = podcastMock;

      setLocalStorageData(podcastData);

      const localStorageData = localStorage.getItem('podcastItems');
      const parsedData = JSON.parse(localStorageData!);
      expect(parsedData.value).toEqual(podcastData);
    });
  });
});
