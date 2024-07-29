import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite, deleteCard } from '../../redux/store';

const Card = ({id, title, isFavorite}) => {
    const dispatch = useDispatch()
    const handleClickFavorite = e => {
        e.preventDefault();
        console.log('Toggling favorite for card ID:', id);
        dispatch(toggleFavorite( id ),[])
    }
    const handleClickDelete = e => {
        e.preventDefault();
        console.log('Deleting card with id:', id);
        dispatch(deleteCard(id), [])
    }

    return (
        <li className={styles.card}>
            {title}
            <div className={styles.icons}>
                <a href='/' onClick={handleClickFavorite}>
                    <span className={`${isFavorite ? 'fa fa-star' : 'fa fa-star-o'}`}></span>
                </a>
                <a href='/' onClick={handleClickDelete}>
                    <span className={styles.trash + ' fa fa-trash-o'}></span>
            </a>
            </div>
        </li>
    );
};

export default Card;