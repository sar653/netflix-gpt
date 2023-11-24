import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';

const GptSearch = () => {
  return (
    <div>
      
      
      
      <div className="fixed -z-10">
        <img
          
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix"
        ></img>
      </div><GptSearchBar></GptSearchBar>
    <GptMovieSuggestion></GptMovieSuggestion>

    </div>
  )
}

export default GptSearch