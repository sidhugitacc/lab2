import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'


function MoviePage() {
  const APIURL = "https://www.omdbapi.com/?apikey=1565bd66&t="
  const [movieName,setMovieName]=useState("")
  const [searchMovie,setSearchMovie]=useState("")
  const [movieData,setMovieData]=useState({})
  const [movieErr,setMovieErr]=useState(false)
  const [loading,setLoading]=useState(null)

  const handleInput=(e)=>{
    setMovieName(e.target.value)
  }

  const searchMovieHandler=()=>{
    if(movieName===""|| movieName===null){
      alert("Enter A Movie Name")
    }
    else{
      setLoading(true)
      var api = APIURL+ movieName
      axios.get(api).then((res)=>{
        console.log('response', res);
        setMovieData(res.data)
        setLoading(false)
      }).catch((err)=>{
        console.log(err);
      })
    }
   }

   const actors="Scarlett Johansson, Morgan Freeman,Choi Min-sik"
   const listactors = actors.split(",")
   console.log((listactors));


  return (
    <>
    <Navbar activeTab="movies"/>

    <div className='w-11/12 p-2 mx-auto mt-20 flex flex-row gap-5  '>
        <input className='flex-1 p-2 border-2 border-black' 
        onChange={handleInput} 
        value={movieName}
        type="text" name="" id="" placeholder='Search for the Movie or TV Show  you want!! Example: Batman'/>
        <button 
        onClick={searchMovieHandler}
        className='px-[16px] py-[8px] bg-[#531616] text-white font-semibold' 
        
        >Search Movie or TV Show</button>
    </div>
    {loading&&
    <div  className='w-full h-[80vh] flex items-center justify-center'>
    <div className="loader"></div>
  </div>
    }

    {
      movieData.Title && !loading?
    <div className='w-11/12 mx-auto my-5 p-2  flex flex-row  gap-2 items-start'>
      <div className='flex flex-col w-[60%] '>
        <div className='flex flex-row items-center justify-between'>
          <div>
          <div className='text-[60px] font-extrabold flex-1 text-[#531616]'>
            {movieData?.Title}
          </div>
          <div className='font-semibold capitalize'>Type : {movieData?.Type}</div>
          <div>Release Date : <strong className='text-[#531616]'>{movieData?.Released}</strong></div>
          <div className='flex flex-row gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480.769-160q-66.598 0-124.761-25.038-58.162-25.039-101.662-68.539-43.5-43.5-68.539-101.648-25.038-58.149-25.038-124.731 0-66.583 25.038-124.775 25.039-58.192 68.539-101.692 43.5-43.5 101.662-68.539Q414.171-800 480.769-800q68.923 0 131.27 28.461 62.346 28.462 108.73 79.385v-75.538q0-8.5 5.758-14.25t14.27-5.75q8.511 0 14.242 5.75 5.731 5.75 5.731 14.25v113.846q0 13.731-9.289 23.019-9.288 9.289-23.019 9.289H614.616q-8.501 0-14.251-5.758t-5.75-14.269q0-8.512 5.75-14.242 5.75-5.731 14.251-5.731h79.23q-41.769-46-96.384-72.231Q542.846-760 480.769-760q-117 0-198.5 81.5t-81.5 198.5q0 117 81.5 198.5t198.5 81.5q98.846 0 175-62t97.846-157.385q2.693-9.076 9.154-14 6.462-4.923 15.003-3.692 9.074 1.231 13.305 8.731T792.846-412Q770-301.461 683-230.731 596-160 480.769-160Zm20-328.308 120 120q5.616 5.616 6 13.769.385 8.154-6 14.539-6.384 6.385-14.154 6.385-7.769 0-14.154-6.385l-122-122q-5.23-5.231-7.461-10.975t-2.231-11.871V-660q0-8.5 5.758-14.25t14.269-5.75q8.512 0 14.243 5.75 5.73 5.75 5.73 14.25v171.692Z"/></svg>   
          <div>{movieData?.Runtime}{movieData.Type==="series"?" / Episode":""}</div>
          
          </div>
          </div>
          <div className=' mr-5 w-[100px]  flex-col h-[100px] flex justify-center text-center items-center rounded-full  border-[4px] border-[#531616]'>
          <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path fill='#531616' d="M480-275.923 334.769-188.23q-6.385 3.153-11.846 2.538-5.462-.615-10.616-3.769-5.153-3.154-7.846-9.039-2.692-5.884-.461-12.731l38.615-164.384-127.769-110.847q-5.385-4.384-7.116-10.5-1.73-6.115.731-11.73 2.462-5.616 6.616-9.154 4.153-3.539 11.23-4.77l168.616-14.692L460.692-693q2.693-6.616 7.808-9.539t11.5-2.923q6.385 0 11.5 2.923t7.808 9.539l65.769 155.692 168.616 14.692q7.077 1.231 11.23 4.77 4.154 3.538 6.616 9.154 2.461 5.615.731 11.73-1.731 6.116-7.116 10.5L617.385-375.615 656-211.231q2.231 6.847-.461 12.731-2.693 5.885-7.846 9.039-5.154 3.154-10.616 3.769-5.461.615-11.846-2.538L480-275.923Z"/></svg>
            <span className='text-[15px] font-bold'>{movieData?.imdbRating}</span>
          </div>
        </div>

        <div className='flex flex-row items-center gap-2'>
          {
            movieData?.Genre?.split(",").map((node,i)=>(
              <div className='px-3 py-1 bg-[#5316165d] text-[12px] my-1 font-bold  border-[#531616] text-[#531616] rounded-[50px] w-fit'>
                {node}
              </div>
            ))
          }

        </div>
        <div className=' flex flex-row gap-2 my-2'>
              <div className='py-1 px-2 w-fit border-2 border-[#531616]'>Director : <span className='font-bold'>{movieData?.Writer}</span></div>
              <div className='py-1 px-2 w-fit border-2 border-[#531616]'>Writer : <span className='font-bold'>{movieData?.Director}</span></div>
          </div>
          <div className='flex flex-row gap-2 bg-[#53161640] p-2'>
              {movieData?.Actors?.split(",").map((node,i)=>(
                <div key={i} className='px-2 py-1 bg-[#531616] text-white font-semibold'>{node}</div>
              ))
                
              }
          </div>
          <div className='p-2 bg-[#53161640] my-3' >
            {movieData?.Plot}

          </div>
      </div>
      <div className='flex flex-col gap-3 w-[60%] '>
        <img 
        src={movieData?.Poster}
        className='w-1/2 h-1/2 mx-auto scale-95' 
        alt="" 
        />
      </div>
    </div>:null
    }
    {
      movieData.Error&&
      <div className='w-11/12 text-center font-bold text-[30px] py-10 text-[#53161640] flex flex-col justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto ' height="80" viewBox="0 -960 960 960" width="80"><path fill='#53161640' d="M612.461-641.615q0-56.077-37.73-90.154-37.731-34.077-99.346-34.077-39.77 0-69.423 15.577-29.654 15.577-51.269 48.038-6.77 9.154-17.347 11.5-10.577 2.347-19.038-4.115-7.077-5.308-8.577-13.923-1.5-8.616 3.346-16.385 28.923-44.154 69.192-65.654 40.269-21.5 93.116-21.5 81.615 0 133.269 47.308 51.654 47.308 51.654 122.462 0 41.923-18.231 78.307-18.231 36.385-56.923 70.77-47 41.153-64.615 69.115-17.616 27.961-18.539 62.192-.923 10.154-7.808 16.923-6.884 6.77-16.807 6.77-9.924 0-16.808-7.039-6.885-7.038-6.885-16.962 0-41.307 19.692-75.346 19.693-34.038 65.847-74.654 41-35.769 57.115-65.269 16.115-29.5 16.115-63.884ZM475.385-120q-16.077 0-28.039-11.961-11.962-11.962-11.962-28.039t11.962-28.039Q459.308-200 475.385-200t28.038 11.961q11.962 11.962 11.962 28.039t-11.962 28.039Q491.462-120 475.385-120Z"/></svg>

        <div>Sorry We could Not find.Please Check your Movie name</div>
      </div>
    }





    </>
  )
}

export default MoviePage