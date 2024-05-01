import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);
 
  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  };
  
  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input className={css.searchField}
        type="text"
        placeholder='Search name...'
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
export default SearchBox; 