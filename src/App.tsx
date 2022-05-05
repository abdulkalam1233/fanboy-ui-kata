import React from 'react';
import './App.css';
import { ResultMap } from './components/celebrity/ResultMap';
import NavComponent from './components/celebrity/Navbar';
import ResultPage from './components/celebrity/ResultPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import Details from './components/celebrity/Details';

function App() {
  const [results, setResults] = React.useState<Array<ResultMap>>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  return (
    <div>
      <NavComponent setResults={setResults} setLoading={setLoading} />
      <div>
        <Routes>
          <Route path="/" element={<ResultPage results={results} />}>
          </Route>
          <Route path=":id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
