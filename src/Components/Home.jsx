import { BrowserRouter as Router, Link } from 'react-router-dom'; //router is required even though not used

function Home () {


  return (
      <div>
        <Link to="/cheatsheet">Cheatsheet</Link>
      </div>

    )
  }

  export default Home;

