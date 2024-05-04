import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <p className={css.title}>
          Contact manager</p>
        <p className={css.title}>Welcome page{' '} 
        <span role="img" aria-label="Greeting icon">💁‍♀️
        </span>
        </p> 
      </div>
    </>
  );
}
