import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../store';
import { setFilter } from '../../store/reducers/podcastsReducer';
import { useAppDispatch } from '../../interfaces/hooks/useAppDispatch';
import { useDebounce } from '../../interfaces/hooks';

const usePodcardFilter = () => {
    const dispatch = useAppDispatch();
    const filteredItems = useSelector(
        (state: RootState) => state.podcastReducer.filteredItems
    );
    const loading = useSelector(
        (state: RootState) => state.podcastReducer.loading
    );
    const [text, setText] = useState('');

    const [debouncedFilter] = useDebounce((filter: string) => {
        console.log(filter);
        dispatch(setFilter(filter));
    }, 500);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let val = event.target.value;
        setText(val);
        if (!loading) {
        debouncedFilter(val);
        }
    };

    return {
        state: {
            loading,
            filteredItems,
            text
        },
        actions: {
            handleFilterChange
        }
    }
}

export default usePodcardFilter;