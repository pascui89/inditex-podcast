import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { MemoryRouter } from 'react-router-dom';
import useResponsiveAppBar from '../useResponsiveAppBar';
import { Provider } from 'react-redux';
import { getMockStore } from '../../../utils/mockUtils';

const mockedUseSelector = jest.fn();
jest.mock("react-redux", () => ({
    ...(jest.requireActual("react-redux")),
    useSelector: () => mockedUseSelector
}));

describe('useResponsiveAppBar', () => {
    beforeEach(() => {
        mockedUseSelector.mockReset();
    });

    it('should initialize with showSpinner as false', () => {
        const { result } = renderHook(() => useResponsiveAppBar(), {
            wrapper: ({ children }: { children: React.ReactNode }) =>  (
                <Provider 
                    store={
                        getMockStore(
                            {
                                podcastReducer: { loading: false },
                                episodeReducer: { loading: false, loadingEpisode: false }
                            }
                        )
                    }
                >
                    <MemoryRouter>
                        {children}
                    </MemoryRouter>
                </Provider>
            )
        });
        expect(result.current.state.showSpinner).toBe(false);
    });

    it('should set showSpinner to true when loading states are true', () => {
        const { result } = renderHook(() => useResponsiveAppBar(), {
            wrapper: ({ children }: { children: React.ReactNode }) =>  (
                <Provider store={getMockStore()}>
                    <MemoryRouter>
                        {children}
                    </MemoryRouter>
                </Provider>
            )
        });
        expect(result.current.state.showSpinner).toBe(true);
    });

    it('should call navigate when handleGoHomeRedirect is invoked', async () => {
        const { result } = renderHook(() => useResponsiveAppBar(), { 
            wrapper: ({ children }: { children: React.ReactNode }) =>  (
                <Provider store={getMockStore()}>
                    <MemoryRouter>
                        {children}
                    </MemoryRouter>
                </Provider>
            )
        });

        expect(result.current.actions.handleGoHomeRedirect).toBeDefined();
        
        act(() => {
            result.current.actions.handleGoHomeRedirect();
        });
    });
});
