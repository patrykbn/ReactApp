import styles from './List.module.scss'
import { useEffect } from 'react';
import Column from '../Column/column';
import { useSelector, useDispatch } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm';
import {resetSearchQuery} from '../../redux/store'
import { getColumnsByList } from '../../redux/columnsRedux';
import { getListById } from '../../redux/listsRedux'; 
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';

const List = () => {
    const { listId } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetSearchQuery())}, [dispatch]);

    const columns = useSelector(state => getColumnsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId));
    if(!listData) return <Navigate to="/" />
    return(
        <div className={styles.List}>
            <header className={styles.header}><h2 className={styles.title}>{listData.title}<span>soon!</span></h2></header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm listId={listId}/>
        </div>
    );
};

export default List;