import css from './Layout.module.scss';
import { Suspense } from 'react';
import { AppBar } from '../appBar/AppBar';


export const Layout = ({children}) => {
  return (
    <div className={css["phonebook-container"]}>
    <h1>Phonebook</h1>
      <AppBar />
      <Suspense fallback={null}>  
      {children}
      </Suspense>
    </div>
  );
};
