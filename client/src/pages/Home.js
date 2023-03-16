import React, { useState, useEffect } from "react";
import sb from "../utils/bookSearch";
import { useSelector, useDispatch } from "react-redux";
import {ALL_BOOKS} from "../utils/action"

import Hero from "../components/Hero";
import ShowResults from "../components/ShowResults";
import gBookSearch from '../utils/bookSearch';

export default function Home({
  searchText, setSearchText
}) {
  const dispatch = useDispatch();
  const [bookSearched, setBookSearched] = useState([]);

  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    gBookSearch.googleSearchHandler(searchText).then(data => {
      setBookSearched(data);
    });
    console.log(searchText, bookSearched)
  }, []);
 
  useEffect(() => {
    if(bookSearched && bookSearched.length > 0) {
      dispatch({
        type: ALL_BOOKS,
        allbooks: bookSearched
      });
    }
    //console.log(searchText, bookSearched)
  }, [bookSearched]);

  return (
    <div>
      <Hero
        bookSearched = {bookSearched}
        setBookSearched = {setBookSearched}
        searchHistory = {searchHistory}
        setSearchHistory = {setSearchHistory}
        searchText = {searchText}
        setSearchText = {setSearchText}
      />
      <div className="mx-auto mb-3 m-lg-2 searchTitle d-flex justify-content-center">Results for - {searchText}</div>
      <ShowResults/>
    </div>
  )
}