import React from 'react'
import {NavLink} from 'react-router-dom';
import { ResultMap } from './ResultMap';

const ImageURl = 'https://image.tmdb.org/t/p/w500/'

function ResultCard(props: {
  result: ResultMap
}) {
  const {result} = props;
  return (
    <div className="card">
      <img src={`${ImageURl}${result.profile_path}`} />
      <div className="section">
        <NavLink to={`./${result.id}`}>
        {result.name}
        </NavLink>
      </div>
      <div style={{ marginLeft: "40px" }}>
    </div>
    </div>
  )
}

export default ResultCard