//import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/Pagetitle';

const Hero = () => {
  const page = 'hero';
  const title = 'My first React App';
  const subtitle = 'A simple to-do app, with lists, columns and card'
    return (
      <PageTitle page={page} title={title} subtitle={subtitle} />
    );
  };

  export default Hero;