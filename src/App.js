import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from "./components/Posts/Posts"


import axios from 'axios';
import { useDispatch } from 'react-redux';
import { filterTags } from './actions';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60a6523a9f1c3c90368211b4';

const App = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data.data))
            .catch(console.error)
            .finally(() => setLoading(false));
         
    }, []);

    
  const dispatch = useDispatch()

  function filteredTags(e){
      dispatch(filterTags(""))
  }
    
    return (
        <div className="App" style={{display:"flex", alignItems:"center", flexDirection:"column"}}> 
           {loading && "Loading..."}
            <button onClick={()=>filteredTags()}>Go back</button>
                {data.map(p =>{
             return <Posts key={p.id} posts={p} />
           })}     


        
        </div>
        
    );
};

export default App;

