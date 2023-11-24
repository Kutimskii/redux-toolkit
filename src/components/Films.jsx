import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useDispatch,useSelector } from 'react-redux'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState} from 'react';
import { useGetFilmsByNameQuery } from '../redux/store/slicers/fetchData';
import 'primereact/resources/themes/vela-purple/theme.css'
import { addFilm } from '../redux/store/slicers/adder';
export default function Films(){
  const [filmName, setFilmName] = useState(null)
  const {data, isLoading } = useGetFilmsByNameQuery(filmName);
  const films = useSelector(state => state.adder)
  const dispatch = useDispatch()
  if(isLoading) return <ProgressSpinner aria-label="Loading"/>

  const imageBodyTemplate = (film) => {
    return <NavLink  to = {`/films/${film.imdbID}`}><img src={film.Poster} alt='...'  width={'80vh'} /></NavLink>;
  };
  const addToFavorites = (chosenFilm)=>{
    if(films.find(el=> el.Title === chosenFilm.Title)){
      return
    }
    dispatch(addFilm(chosenFilm))
  }
  const BtnBodyAdd = (film) => {
    return <Button label="Add"  icon="pi pi-check" onClick={()=>addToFavorites(film)}/>;
  };
  if(!data) return
    return (
      <div>
        <h1>Find your film and add to <NavLink  to = "/favorites">favorites</NavLink></h1>
        <InputText onChange={(e)=>setFilmName(e.target.value)} style={{backgroundColor:'white',
          marginBottom:'20px',
          color:'black'}}/>
        <div className="card">
              <DataTable value={data.Search} tableStyle={{ maxnWidth: '10rem'}}>
                  <Column className='film' header="Poster" body={imageBodyTemplate} style={{ maxWidth:'5%' }}></Column>
                  <Column field="Title" header="Title" ></Column>
                  <Column field="Year" header="Year"></Column>
                  <Column header="Add to favorite" body={BtnBodyAdd}></Column>
              </DataTable>
        </div>
      </div>)
}