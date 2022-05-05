import React, { ReactElement } from "react";
import { celebrityService } from "../../services/celebrity.service";
import Search from "./Search";

interface navProps {
  setResults: Function;
  setLoading: Function;
}

function NavComponent(props: navProps): ReactElement {

  const handleSearchSubmit = (searchText: string): void => {
    celebrityService.getAllCelebrities({
      query: searchText
    })
    .then((result) =>{
      props.setResults(result.data);
    })
    .catch((e) =>{
      props.setResults([]);
      console.error(e);
    }).finally(() =>{ 
      props.setLoading(false);
    })
  };

  return (
    <header className="sticky">
      <div className="row">
        <div className="col-sm-8">
          <a href="#" className="logo">
            Logo
          </a>
        </div>
        <div className="col-sm-4">
          <Search handleSearchSubmit={handleSearchSubmit} />
        </div>
      </div>
    </header>
  );
}

export default NavComponent;
