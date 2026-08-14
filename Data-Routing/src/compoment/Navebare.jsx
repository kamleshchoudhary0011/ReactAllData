
import { NavLink } from 'react-router'

const Navebare = () => {
  return (
    <div className=' flex gap-5 justify-around items-center bg-gray-600 p-3 mx-3 my-2 rounded-l-md'>
   <NavLink to={"/"}>About</NavLink>
    <NavLink to={"aboute"}>About</NavLink>
    <NavLink to={"services"}>Services</NavLink>
    </div>
  )
}

export default Navebare
