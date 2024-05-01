import { Hearts } from 'react-loader-spinner'
import css from './Loader.module.scss';

const LoaderComponent = () => {
    return (
     <div className={css.loader}>
      <Hearts
            height="80"
            width="80"
            color="red"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
     />
     </div>
    );
  }
  
  export default LoaderComponent;