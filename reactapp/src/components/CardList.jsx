import CardItem from './CardItem'




const CardList = (props) => {

  return (
    <div>
     
     <div className="container">
        <div className="row">
            {
                    props.prLst.map(pr => {
                     return(
                         <CardItem 
                         key={pr.id}
                         title={pr.title}
                         image={pr.image}
                         price ={pr.price}
                         />
                     )
                    })
             
            }
        </div>
     </div>

    </div>
  )
}

export default CardList