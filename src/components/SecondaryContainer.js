import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const  SecondaryContainer=() =>{
  const movies= useSelector((store)=>store.movies)
  
  console.log(movies)
  return (
    <div><MovieList title={"nowplaying"} movies={movies.nowPlayingMovies}/></div>
  )
}

export default SecondaryContainer