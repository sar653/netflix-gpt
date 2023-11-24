import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const  SecondaryContainer=() =>{
  const movies= useSelector((store)=>store.movies)
  
  console.log(movies)
  return (movies.nowPlayingMovies &&
    <div className='bg-black'><div className='-mt-52 relative z-20 '><MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/></div>
    
    
    
    
    
    </div>
  )
}

export default SecondaryContainer