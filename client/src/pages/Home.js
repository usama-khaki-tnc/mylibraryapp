import React, { useState, useEffect } from "react";

export default function Home() {
  return (
<<<<<<< Updated upstream
    <div>HOME</div>
=======
    <div>
      <Hero
        bookSearched = {bookSearched}
        setBookSearched = {setBookSearched}
        searchHistory = {searchHistory}
        setSearchHistory = {setSearchHistory}
        searchText = {searchText}
        setSearchText = {setSearchText}
      />
      <div className="mx-auto mb-3 m-lg-2 searchTitle d-flex justify-content-center"><h2 class="display-5 mt-3 mb-5 text-center">Results for - {searchText}</h2></div>
      <ShowResults/>
    </div>
>>>>>>> Stashed changes
  )
}