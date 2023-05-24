import React ,{ useContext }from 'react'
import { AppContext } from '../context'
import Movies from './Movies'
import Search from './Search'

const Home = () => {
    // const name = useContext(AppContext)
  return (
    <div>
        <Search />
        <Movies />
    </div>
  )
}

export default Home

// http://img.omdbapi.com/?apikey=[yourkey]&
//  b5c0979