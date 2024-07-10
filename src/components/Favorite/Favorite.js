//import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/Pagetitle';

const Favorite = () => {
    const page = 'favorite';
    const title = 'Favorite';
    const subtitle = 'Lorem Ipsum'
      return (
        <PageTitle page={page} title={title} subtitle={subtitle} />
      );
  };

  export default Favorite;