import React from "react";
import { SearchWrapper, SearchInput, SearchIcon, Button } from "../styles/SearchSt";

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="축제 검색..." />
      <SearchIcon size={20} />
      <Button>검색</Button>
    </SearchWrapper>
  );
};

export default SearchBar;