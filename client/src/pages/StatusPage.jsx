import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import StatusTable from '../components/StatusTable';

const StatusPage = () => {
  const { idx } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
      setList(response.data);
    }
    getData()
  }, [])
  

  return (
    <div className="bg-body-tertiary px-5">
    <div className="container-fluid border border-dark bg-white py-2">
      <nav className="navbar navbar-nav navbar-expand-lg">
        <h1>Player Status - Game {idx}</h1>
        <div className="container-fluid justify-content-center">
          <NavLink to="/status/game/1" className="nav-link me-1">Game 1</NavLink> |
          <NavLink to="/status/game/2" className="nav-link ms-1 me-1">Game 2</NavLink> |
          <NavLink to="/status/game/3" className="nav-link ms-1">Game 3</NavLink>
        </div>
      </nav>
      { list &&
        <StatusTable list={list} setList={setList}/>
      }
    </div>
  </div>
  )
}

export default StatusPage