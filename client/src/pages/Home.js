import React, { useState, useEffect } from "react";
import sb from "../utils/bookSearch";
import { useSelector, useDispatch } from "react-redux";
import {ALL_BOOKS} from "../utils/action"

import Hero from "../components/Hero";

export default function Home({
  searchText, setSearchText
}) {
  const dispatch = useDispatch();
  const [bookSearched, setBookSearched] = useState([]);

  const [searchHistory, setSearchHistory] = useState([]);
  
  useEffect(() => {
    if(bookSearched && bookSearched.length > 0) {
      dispatch({
        type: ALL_BOOKS,
        allbooks: bookSearched
      });
    }
    console.log(bookSearched)
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
      <div>HOME</div>
    </div>
  )
}