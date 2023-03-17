import { useDispatch } from 'react-redux';
import { setFilterAction } from 'redux/filter/filter.slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filter = event.currentTarget.value;
    dispatch(setFilterAction(filter));
  };

  return (
    <div className={css.container}>
      <p className={css.title}>Find contact by name</p>
      <input type="text" onChange={handleFilterChange} />
    </div>
  );
};
