import React, { useState } from "react";
import { SearchForm, SearchButton, SearchInput } from "../styles/SearchSt";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchForm>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="검색어를 입력해주세요."
      />
      <SearchButton type="submit">🔍</SearchButton>
    </SearchForm>
  );
};

export default SearchBar;