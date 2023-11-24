import { useSelector } from 'react-redux'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { NavLink } from 'react-router-dom';

export default function FavoritesFilms(){
  const films = useSelector(state => state.adder)
  const imageBodyTemplate = (film) => {
    return <NavLink  to = {`/films/${film.imdbID}`}><img src={film.Poster} alt='...'  width={'80vh'} /></NavLink>;
  };
  return (
   
  <div className="films">
     <h1><NavLink  to = "/">Home</NavLink></h1>
    <DataTable value={films} tableStyle={{ maxnWidth: '10rem'}}>
      <Column header="Poster" className='film' body={imageBodyTemplate} style={{ maxWidth:'40%' }}></Column>
      <Column className='film'field="Title" header="Title"></Column>
      <Column field="Year" header="Year"></Column>
    </DataTable>
  </div>)
}