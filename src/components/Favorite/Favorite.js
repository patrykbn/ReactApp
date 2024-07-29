import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/Pagetitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux'; 
import Card from '../Card/Card';

const Favorite = () => {
    const page = 'favorite';
    const title = 'Favorite';
    const subtitle = 'Lorem Ipsum'

    const favoriteCards = useSelector(state => getFavoriteCards(state))
      return (
        <>
        <PageTitle page={page} title={title} subtitle={subtitle} />
            <div className={styles.favoriteCards}>
            <ul className={styles.cards}>
                {favoriteCards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
            </ul>
            </div>
        </>
      );
  };

  export default Favorite;