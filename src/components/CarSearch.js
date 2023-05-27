import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className='list-header'>
      <div className='title is-3'>My Cars</div>
      <div className='search field is-horizontal'>
        <label className='label'>Search</label>
        <input
          className='input'
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>
    </div>
  );
}

export default CarSearch;
