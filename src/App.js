import React from 'react';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';

const App = () => {
  return (
    <div className="container">
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;
