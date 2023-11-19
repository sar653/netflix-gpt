import { useEffect } from "react";
import { useDispatch} from "react-redux";
import {addTrailerVideo} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer=(movieId)=>{
const dispatch=useDispatch()

//const [key1,setkey1]=useState(null)
const getMovieVideos = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
    API_OPTIONS
  );
  const json = await data.json();
  console.log(json);

  const filterData = json.results.filter((video) => video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] : json.results[0];
  console.log(trailer);
  console.log("result", json.results[0]);
 // setkey1(trailer.key)
  dispatch(addTrailerVideo(trailer))
};

useEffect(() => {
    getMovieVideos();
  },[]);}


  export default useMovieTrailer;