import React from 'react';

function Home () {

  return (
      <div className="container-fluid page"> <div className="row">
          <div className = "page-header"><h2>Home Page</h2></div>
          <div className="contatiner-fluid d-flex flex-wrap mini-module">
            <div className="text"> <h1>Input Stuff:</h1>
                <form>
                  <div class="form-group row"><label>Input 1:</label><input class='form-field' type='text' placeholder='input 1' value=''/></div>
                  <div class="form-group row"><label>Input 2:</label><input class='form-field' type='text' placeholder='input 2' value=''/></div>
                  <input type="submit" value="Submit" className="btn btn-primary mb-2"/>
                </form>
            </div>
          </div>
        </div></div>

    )
  }

  export default Home;

