import styles from './SearchForm.module.scss'
import { useState} from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {addSearchQuery} from '../../redux/store'

const SearchForm = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');
    const handleSearch = e => {
        const searchQuery = search.toLowerCase()
        e.preventDefault();
        dispatch(addSearchQuery(searchQuery))
        setSearch('');
    }
    return (
        <form className={styles.SearchForm} onSubmit={handleSearch}>
            <TextInput placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;