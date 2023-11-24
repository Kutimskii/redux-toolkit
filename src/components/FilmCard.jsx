import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { ProgressSpinner } from 'primereact/progressspinner';
import { useGetFilmsByIdQuery } from "../redux/store/slicers/fetchData";
import { Card } from 'primereact/card';
export default function FilmCard(){
  const id = useParams()
  const {data, isLoading } = useGetFilmsByIdQuery(id.id);
  if(isLoading) return <ProgressSpinner aria-label="Loading"/>
  return (
   
  <div className="films">
     <h1><NavLink  to = "/">Home</NavLink></h1>
      <Card >
        <div className='content'>
          <h1>{data.Title}</h1>
          <img src={data.Poster} alt="" />
        </div>
        <div className='decrip_film'>
            <div className='decrip'>Year: {data.Year}</div>
            <div className='decrip'>Genre: {data.Genre}</div>
            <div className='decrip'>Runtime: {data.Runtime}</div>
            <div className='decrip'>Director: {data.Director}</div>
            <div className='decrip'>Actors: {data.Actors}</div>
            <div className='decrip'>imdbRating: {data.imdbRating}</div>
            <div>{data.Plot}</div>
        </div>

      </Card>
  </div>)
}