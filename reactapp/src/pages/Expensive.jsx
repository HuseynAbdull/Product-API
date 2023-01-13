import React from 'react'
import CardItem from '../components/CardItem'
import CardList from '../components/CardList';


const Expensive = (props) => {
  const products =props.prLst;
  return (
    <div className="container">
      <div className="row">
        {
          products && products.map(pr => {
            if(products.price >200){
              return(
                <CardItem 
                  key={pr.id}
                  title={pr.title}
                  image={pr.image}
                  price ={pr.price}
                  
                />
              )
              
            }
          })
        }
      </div>
      <div>
        <CardList prLst ={props.productList}/>
    </div>
    </div>
  )
}

export default Expensive