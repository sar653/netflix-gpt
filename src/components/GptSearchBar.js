import React from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log("langkey",langKey)
  console.log("lang",lang)
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async(movie) => {
  
    const data = await fetch(
      
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log( "q",json.results)
    return json.results;
   
  };

  const handleGptSearchClick = async () => {
    const gptquery =
      "Act as a movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of five movies, comma separated like the example result given ahead.Example Result:Gadar,sholey,Don,golmal,koi ml gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptquery }],
      model: "gpt-3.5-turbo",
    });
   // console.log(gptResults.choices);

    //if (!gptResults.choices) {
      //error handling}
    //}
    console.log("n",gptResults.choices?.[0]?.message?.content.split(","))

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    debugger;
    const tmdbResults = await Promise.all(promiseArray);
    
    console.log("tmdb",tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))
      
    ;
  };
  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {" "}
          {lang[langKey].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
