import React, { Component } from 'react';

const App = () => {
  return (
    <div>
      <h1>moja strona</h1>
      <form action='/submit'>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' name='firstName'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;