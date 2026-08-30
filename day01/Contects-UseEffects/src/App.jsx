
import { useContext } from 'react'
import './App.css'
import Aboute from './component/Aboute'
import Contact from './component/Contact'
import Home from './component/Home'
import { MyStore } from './Contacts/MyContext'

function App() {

  const {count , setCoun} = useContext(MyStore);

  return (
    <>
  
 <button onClick={(()=> setCoun(count + 1))}>increment</button>

 <h1>{count}</h1>
<Home/>
<Aboute/>
<Contact/>
     

    </>
  )
}

export default App
