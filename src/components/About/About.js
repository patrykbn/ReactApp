//import styles from './About.module.scss';
import PageTitle from '../PageTitle/Pagetitle';

const About = () => {
    const page = 'about';
    const title = 'About';
    const subtitle = 'Lorem Ipsum'
      return (
        <PageTitle page={page} title={title} subtitle={subtitle} />
      );
  };

  export default About;