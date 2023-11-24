import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const {movieResults,movieNames}=useSelector((store)=>store.gpt)
  if(!movieNames)return null
  return (
    <div className='bg-black p-4 m-4 text-white'><div>{movieNames.map (( movieName ,index)=><MovieList key={movieName} title={movieNames[0]} movies= {movieResults[index]} />)
  }</div></div>
  )
}

export default GptMovieSuggestion