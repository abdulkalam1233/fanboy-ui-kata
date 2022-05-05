import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { celebrityService } from '../../services/celebrity.service';
import { CelebrityMap } from './ResultMap';

const searchUrl = "http://localhost:8080/people";

function Details() {
  const {id} = useParams();
  const [celebrity, setCelebrity] = useState<CelebrityMap>();

  useEffect(() => {
    if (id) {
      celebrityService.getCelebrityById(id)
      .then((result) => {
        setCelebrity(result.data);
      })
      .catch((e) => {
        console.error(e);
      })
    }
  }, [id]);

  return (
    <div>
      <figure className='card'>
        {/* <caption>{celebrity?.name}</caption> */}
        <img src={`https://image.tmdb.org/t/p/w500/${celebrity?.profile_path}`} />
        <section>
          {celebrity?.birthday}
        </section>
      </figure>
    </div>
  )
}

export default Details