import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  console.log("movies",movies)
  return (
<div className='px-6 '><h1 className='text-2xl py-10 text-white'>{title}</h1>
   <div className='flex overflow-x-scroll px-6 scrollbar-hide max-w-full '> <div className='flex space-x-4'>
      {movies.map((movie)=>(<MovieCard key={movie.id} posterPath= {movie.poster_path}/>))}   
  
    </div></div> 
  </div>
    
  )
}
export default MovieList