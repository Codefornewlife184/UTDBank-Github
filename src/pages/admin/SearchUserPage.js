import React from "react";
import SearchBar from "../../components/admin/SearchBar";
import Spacer from "../../components/common/Spacer";
import PageHeader from "../../components/common/PageHeader";
import SearchEngine from "../../components/admin/SearchEngine";

const SearchUserPage = () => {
  return (
    <>
      <PageHeader title="Search" />
      <Spacer />
      {/* <SearchBar /> */}
      <SearchEngine />
      <Spacer />
    </>
  );
};

export default SearchUserPage;
