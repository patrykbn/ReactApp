import PageTitle from '../PageTitle/Pagetitle';

const Notfound = () => {
    const page = 'notfound';
    const title = '404';
    const subtitle = 'Page not found'
      return (
        <PageTitle page={page} title={title} subtitle={subtitle} />
      );
  };

  export default Notfound;