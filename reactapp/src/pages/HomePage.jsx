import React from 'react'
import CardList from '../components/CardList';


const HomePage = (props) => {
  return (
    <div>
        <CardList prLst ={props.productList}/>
    </div>
  )
}

export default HomePage
