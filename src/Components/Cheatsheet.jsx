import {useState, useEffect} from 'react';

function Cheatsheet () {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
const [list, setList] = useState([])

  function handleNameInput(e) {
    setName(e.target.value)

  }

  function handleDescInput(e) {
    setDescription(e.target.value)

  }

  function handleSubmit() {
    setList([...list, {name: name, description: description}])
    setName('')
    setDescription('')
  }

useEffect(() => {
  console.log("name: ", name)
  console.log("description: ", description)
  console.log("list: ", list)
}, [list])

  return (
      <div className="container-fluid page"> <div className="row">
          <div className = "page-header"><h2>Home Page</h2></div>
          <div className="contatiner-fluid d-flex flex-wrap mini-module">
            <div className="text"> <h1>Input Stuff:</h1>
                <form>
                  <div className="form-group row"><label>Name:</label>
                      <input className='form-field' onChange={handleNameInput} type='text' placeholder='name...' value={name}/></div>
                  <div className="form-group row"><label>Description:</label>
                      <input className='form-field' onChange={handleDescInput} type='text' placeholder='description...' value={description}/></div>
                  <input type="button" value="Submit" onClick={handleSubmit} className="btn btn-primary mb-2"/>
                </form>
            </div>
          </div>
        </div></div>

    )
  }

  export default Cheatsheet;

