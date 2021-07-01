import {useState, useEffect} from 'react';

function InputForm () {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [inputs, setInputs] = useState({})

  function handleNameInput(e) {
    setName(e.target.value)
  }

  function handleDescInput(e) {
    setDescription(e.target.value)
  }

  function handleCatInput(e) {
    setCategory(e.target.value)
  }

  function handleSubmit() {
    setInputs({name: name, description: description, category: category})
    setName('')
    setDescription('')
  }

useEffect(() => {
  function postInputs() {
    fetch('http://localhost:3001/inputcheats', {
      method: 'POST',
      body: JSON.stringify(inputs),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
  if(inputs.name !== undefined) {
    postInputs()
  }
}, [inputs])

  return (
      <div>

      <h1>Cheatsheet</h1>

       <h2>Input Stuff:</h2>
          <form>
            <div><label>Name:</label><input onChange={handleNameInput} type='text' placeholder='name...' value={name}/></div>
            <div><label>Description:</label><input onChange={handleDescInput} type='text' placeholder='description...' value={description}/></div>
            <input type="button" value="Submit" onClick={handleSubmit}/>
          </form>
      </div>
    )
  }

  export default InputForm;

