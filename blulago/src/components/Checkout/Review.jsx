import React from 'react'




const Review = ({cart}) => {
  const purchases = cart.line_items
  
    return (
       <div>
        <p>You are purchasing: {purchases.map((purchase) => (
          <div key={purchase.id}>
          <span>{purchase.name}</span>
          <br/>
          </div>
        ))}</p> 
       </div>
        
    )
}



export default Review
