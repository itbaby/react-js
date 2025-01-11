import React from 'react';
import './App.css';
import HOCExample from './HOCExample';
import FormActionExample from './FormActionExample';
// import LazyComponent from './LayzComponent';

const LazyComponent = React.lazy(()=>import('./LayzComponent'))
function App() {
  return (
    <div className="App">
      <HOCExample />
      <FormActionExample />
      <LazyComponent/>
    </div>
  );
}

export default App;
