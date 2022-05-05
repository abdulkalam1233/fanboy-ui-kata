import React from 'react'
import { ResultMap } from './ResultMap';
import NotFound from './NotFound';
import ResultCard from './ResultCard';
import { Outlet } from 'react-router-dom';

interface resultPage {
  results: Array<ResultMap>
}

function ResultPage(props: resultPage) {
  const {results} = props;
  const resultsElements =  results.map((result: ResultMap) => <ResultCard key={result.id} result={result} />)
  return (
    <div className="row">
      {
        results.length ? 
          resultsElements
        : <NotFound />
      }
      <Outlet />
    </div>
  )
}

export default ResultPage;