import{useState, useEffect} from'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router is required even though not used


function Home () {
const [list, setList] = useState([])

useEffect(() => {
function listCheats() {
  fetch('http://localhost:3001/')
  .then(res => res.json())
  .then(json => setList(json))
  }
  listCheats()
}, [])


  return (
    <div>
    <h2>Home Page</h2>

    <p>WE CANN ADD SEARCH STUFFF HERE</p>


    <div> {list.map(item => <li>{item.name} || {item.description}</li>)} </div>

  </div>




    )
  }

  export default Home;

