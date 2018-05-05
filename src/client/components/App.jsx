import React, { Component } from 'react';
import Input from './Input.jsx';
import Datepicker from './Datepicker.jsx'

export default () => {
  console.log('app')
  return (
    <div style={{width: '500px'}}>
      <h1>moja strona</h1>
      <form action='/submit'>
        <Input type='text' id="name" label='First Name'/>
        <Input type='text' id="surname" label='Second Name'/>
        <Input type='email' label='Email'/>
        <Datepicker id="date" label='Event Date'/>
        <Input type='submit'/>
      </form>
    </div>
  );
}
