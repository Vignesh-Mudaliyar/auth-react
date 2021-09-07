import {useState,useEffect} from 'react';

const useApi = (url) =>{
    const [data,setData] =useState([]);
    const [loading,setLoading] =useState(false);

    useEffect(() => {
  
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.data);
  
          setTimeout(() => {
              setData(result.data);
              setLoading(true);
          },700)
       
        });
    }, []);

    return {data,loading}
};

export default useApi;