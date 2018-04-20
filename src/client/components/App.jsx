import React, { Component } from 'react';
import Input from './Input.jsx';

export default () => {
  console.log('app')
  return (
    <div style={{width: '500px'}}>
      <h1>moja strona</h1>
      <form action='/submit'>
        <Input type='text' label='Name'/>
        <Input type='email' label='Email'/>
        <Input type='submit'/>
      </form>
    </div>
  );
}