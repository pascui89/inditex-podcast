import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
export const getMockStore = ( customStore = {} ) => {
    return mockStore({
        podcastReducer: {
            loading: true
        },
        episodeReducer: {
            loading: true,
            loadingEpisode: true
        },
        ...customStore
    });
}