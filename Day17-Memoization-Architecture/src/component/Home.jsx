import React from 'react'

const Home = ({user}) => {
  return (
    <div>
      Home
Home
    </div>
  )
}

export default React.memo(Home,(prevProps , nextProps)=>{


  return prevProps.user.id === nextProps.user.id

});
