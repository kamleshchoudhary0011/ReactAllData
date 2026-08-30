import React, { useContext } from 'react'
import CardCard from '../components/CardCard'
import { MyStore } from '../contexts/MyContexts'

const CardScreen = () => {
  let {cardItems}= useContext(MyStore)

console.log(".............",cardItems)

  return (
<>
{
  cardItems.map((elem)=>{

    return <CardCard key={elem.id} cardItems={elem} />

  })
}

</>


  )
}

export default CardScreen
