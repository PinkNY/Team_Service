import React from "react";
import { SearchWrapper, SearchInput, SearchIcon } from "../styles/SearchSt";

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="축제 검색..." />
      <SearchIcon size={20} />
    </SearchWrapper>
  );
};

export default SearchBar;