import React, { useState } from 'react';
import styles from './App.module.css';
import Form from './Form';


function App() {
  return (
    <div className={styles.container}>
      <h1>Contact app</h1>
      <Form  />
    </div>
  );
}

export default App;