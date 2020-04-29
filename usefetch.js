import react, {useEffect,useState} from 'react';

export const useFetch=(url)=>{
  const [state,setState]=useState({data:null,loading:true});
  useEffect(()=>{
    fetch(url)
    .then(x=>x.toText())
    .then(y=>{
      console.log(y);
      setState({data:y,loading:false});
    })
  },[url])
  return state;
}